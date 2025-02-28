const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const action = core.getInput('action', { required: true });
  const environment = core.getInput('environment', { required: true });
  const currentBranch = core.getInput('current-branch', { required: true });
  const mainBranch = core.getInput('main-branch', { required: true });

  if (environment == 'Prod' && action == 'Apply' && currentBranch != mainBranch){
    core.setOutput("outcome", "False");
    return
  }

  core.setOutput("outcome", "True")
  
} catch (error) {
  core.setFailed(error.message);
}