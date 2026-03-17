const { Application } = require('probot');

// Create a new Probot application
const app = new Application();

app.on(['issues.opened', 'issues.edited'], async context => {
    const issueComment = contextIssueComment.create({
      body: 'Thanks for opening this issue!'
    });
    await context.octicon.issues.createComment(issueComment);
});

app.on('pull_request.opened', async context => {
    const pullRequestComment = context.issue({
      body: 'Thanks for your pull request!'
    });
    await context.github.issues.createComment(pullRequestComment);
});

// Add more event handlers as needed

app.on('schedule.repository', async context => {
    // Automate closing stale issues
});

app.on('push', async context => {
    // Bot logic on push events
});

module.exports = app;