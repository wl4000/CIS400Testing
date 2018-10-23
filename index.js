/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    app.log('issue opened')
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })

  app.on('pull_request.opened', async context => {
    app.log('pull request opened')
    const pullRequestComment = context.issue({ body: 'Thanks for opening this pull request!' })
    const files = await context.github.pullRequests.getFiles(context.issue())
    app.log(files)
    return context.github.issues.createComment(pullRequestComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
