sep-automation-bdd-js-muhtar

it is sep-automation-bdd-js-main depository downloaded from cydeo github to my local
worked by ost and push to ost Ost github remote repo as sep-automation-bdd-js-muhtar

=================================================
Environmental Variables  // Needs to be configured inside user-settings-json file 
-------------------------------------------------
SEP_QA_URL = https://qa.sep.tdtm.cydeo.com/taws
SEP_USERNAME = automation-user
SEP_PASSWORD = 123abc

CARD_NUMBER = 4242424242424242
EXPIRATION_DATE = 12/28
CVC = 368
ZIP_CODE = 22102


========================================================
Steps "to do" for each user story  / Repo-GitHub Management
--------------------------------------------------------
1. Create a Feature Branch
	Create a new branch for your feature
	Use the naming convention: feature/tag-feature-name

2. Switch to the Feature Branch
	In VS Code, checkout the newly created feature branch

3. Update Your Feature Branch
	Pull the latest updates from the develop branch into your feature branch
	This ensures you're working with the most recent codebase

4. Develop Your Feature
	Work on your feature in the designated file(s)

5. Generate Step Definitions
	Create step definitions for your feature

6. Test Your Feature
	Run the step definitions to ensure your feature works as expected

7. Push Changes to Remote
	Commit your changes locally
	Push the committed changes to the remote feature branch

8. Create a Pull Request
	On your git platform (e.g., GitHub, GitLab), create a pull request
	Set the source as your remote feature branch
	Set the target as the remote develop branch

9. Merge the Feature
	After review and approval, merge the pull request
	This integrates your feature into the develop branch