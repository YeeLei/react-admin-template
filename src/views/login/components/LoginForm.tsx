import { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Login } from '@/api/interface'
import { loginApi } from '@/api/modules/login'
import { HOME_URL } from '@/config/config'
import { useTranslation } from 'react-i18next'
import { setToken } from '@/redux/modules/global'
import { useDispatch } from '@/redux'
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

  // login
  const onFinish = async (loginForm: Login.ReqLoginForm) => {
    try {
      setLoading(true)
      const { data } = await loginApi(loginForm)
      if (data?.token) {
        dispatch(setToken(data!.token))
        message.success('登录成功！')
        navigate(HOME_URL)
      } else {
        message.error('登录失败')
      }
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名：admin / editor" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password autoComplete="new-password" placeholder="密码：12345678" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          onClick={() => {
            form.resetFields()
          }}
          icon={<CloseCircleOutlined />}
        >
          {t('login.reset')}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
          {t('login.confirm')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
