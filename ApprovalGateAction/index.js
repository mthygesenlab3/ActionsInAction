const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const tfAction = core.getInput('action', { required: true });
  const environment = core.getInput('environment', { required: true });
  const currentBranch = core.getInput('current-branch', { required: true });
  const mainBranch = core.getInput('main-branch', { required: true });

  if (environment == 'Prod' && tfAction == 'Apply' && currentBranch != mainBranch){
    core.setOutput("outcome", false);
    return
  }

  core.setOutput("outcome", true)
  
} catch (error) {
  core.setFailed(error.message);
}