/**
 * feat：新增功能
 * fix：修复缺陷
 * docs：文档更新
 * style：不影响程序逻辑的代码修改（修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑）
 * refactor：代码重构
 * perf：性能提升
 * test：测试相关
 * build：构建相关
 * ci：持续集成
 * chore：不属于以上类型的其他类型，比如构建流程, 依赖管理
 * revert：回退代码
 */
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [0, 'never'],
    'footer-leading-blank': [0, 'never'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'perf', 'style', 'docs', 'test', 'refactor', 'build', 'ci', 'chore', 'revert', 'release'],
    ],
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      customScope: '请输入自定义的提交范围 :',
      subject: '请简要描述提交(必填)',
      body: '请输入详细描述(可选)',
      footer: '请输入要关闭的issus(可选)',
      confirmCommit: '确认要使用以上信息提交？(y/n)',
    },
    types: [
      { value: 'feat', name: 'feat:   🚀  新增功能', emoji: '🚀' },
      { value: 'fix', name: 'fix:   🧩  修复缺陷', emoji: '🧩' },
      { value: 'docs', name: 'docs:   📚  文档更新', emoji: '📚' },
      { value: 'style', name: 'style:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: '🎨' },
      { value: 'refactor', name: 'refactor:   ♻️  代码重构（不包括 bug 修复、功能新增）', emoji: '♻️' },
      { value: 'perf', name: 'perf:   ⚡️  性能优化', emoji: '⚡️' },
      { value: 'test', name: 'test:   ✅  测试相关', emoji: '✅' },
      {
        value: 'build',
        name: 'build:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: '📦️',
      },
      { value: 'revert', name: 'revert:   ⏪️  回退代码', emoji: '⏪️' },
      { value: 'chore', name: 'chore:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）', emoji: '🔨' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false,
  },
}
