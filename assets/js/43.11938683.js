(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{242:function(t,e,a){t.exports=a.p+"assets/img/pipelines.0565036c.svg"},248:function(t,e,a){t.exports=a.p+"assets/img/pr-build-validation.e0c6fcce.png"},537:function(t,e,a){t.exports=a.p+"assets/img/scm-contacts-ci.3fecf209.png"},538:function(t,e,a){t.exports=a.p+"assets/img/scm-contacts-api-arch.f78095ad.png"},765:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"challenge-4-work-with-azure-pipelines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge-4-work-with-azure-pipelines"}},[t._v("#")]),t._v(" Challenge 4: Work with Azure Pipelines")]),t._v(" "),e("p",[e("img",{attrs:{src:a(242),alt:"Azure Pipelines"}})]),t._v(" "),e("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),e("ul",[e("li",[t._v("Create a CI build to create SCM Contacts API's deployment artifacts")]),t._v(" "),e("li",[t._v("Create a "),e("em",[t._v("Pull Request")]),t._v(" validation build, that is triggered to validate a "),e("em",[t._v("Pull Request")])]),t._v(" "),e("li",[t._v("Create a CD Build to deploy SCM Contacts API to the stages "),e("em",[t._v("Development")]),t._v(" and "),e("em",[t._v("Testing")])])]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#create-the-ci-build"}},[t._v("Create the CI Build")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("Create the Pull Request Validation Build")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#create-the-cd-build"}},[t._v("Create the CD Build")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#create-a-pull-request"}},[t._v("Create a Pull Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("Trigger the PR-Build to validate a Pull Request")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#see-the-build-flow-in-action"}},[t._v("See the Build Flow in Action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#wrap-up"}},[t._v("Wrap-Up")])])]),t._v(" "),e("h2",{attrs:{id:"create-the-ci-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ci-build"}},[t._v("#")]),t._v(" Create the CI Build")]),t._v(" "),e("p",[t._v("Go to Azure Boards and set the User Story S4 and S5 to "),e("em",[t._v("active")]),t._v(". We create a new build definition with the steps as follows:")]),t._v(" "),e("ul",[e("li",[t._v("Build the SCM Contacts API")]),t._v(" "),e("li",[t._v("Copy the ARM Template to the artifact location")]),t._v(" "),e("li",[t._v("Publish the artifacts")])]),t._v(" "),e("ol",[e("li",[t._v("Create a feature branch "),e("em",[t._v('"features/scmcontactscicd"')]),t._v(" and check it out")]),t._v(" "),e("li",[t._v("Add a file named "),e("code",[t._v("scm-contacts-ci.yaml")]),t._v(" in the directory "),e("code",[t._v("day4-azdevops/apps/pipelines")])]),t._v(" "),e("li",[t._v("Add the following yaml snippet that defines the build Trigger:")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azdevops/apps/infrastructure/templates/scm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dotnetcore.json\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azdevops/apps/dotnetcore/Scm/*\n")])])]),e("p",[t._v("Here we specified when the build must be triggered. The build is triggered only if changes were made to the master branch and when the changes were made to either "),e("code",[t._v("_day4-azdevops/apps/infrastructure/templates/scm-api-dotnetcore.json_")]),t._v(" or to any files under directory "),e("code",[t._v("\\*day4-azdevops/apps/dotnetcore/Scm/\\*\\*")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Add the following yaml snippet to define the needed build steps:")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Scm Contacts\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vmImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Restore\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restore\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4-azdevops/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4-azdevops/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" publish\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publishWebProjects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azdevops/apps/dotnetcore/Scm/Adc.Scm.Api/Adc.Scm.Api.csproj\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output $(build.artifactstagingdirectory)\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipAfterPublish")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CopyFiles@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sourceFolder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azdevops/apps/infrastructure/templates\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            scm-api-dotnetcore.json")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetFolder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PublishPipelineArtifact@1\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifactName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drop\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Commit your changes and push the branch to your remote repository.")]),t._v(" "),e("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),e("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new pipeline")]),t._v(" "),e("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),e("li",[t._v("Select your college repository")]),t._v(" "),e("li",[t._v("Select "),e("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),e("li",[t._v("Select your feature branch and specify the path: "),e("em",[t._v('"/day4-azdevops/apps/pipelines/scm-contacts-ci.yaml"')])]),t._v(" "),e("li",[t._v("Run your CI Build by clicking the action "),e("em",[t._v('"Run"')])]),t._v(" "),e("li",[t._v("Rename your CI Build to "),e("em",[t._v('"SCM-Contacts-CI"')])]),t._v(" "),e("li",[t._v("Navigate to the Pipelines page and open the last run of the build "),e("em",[t._v('"SCM-Contacts-CI"')]),t._v(". You see that the artifact is linked to your build.")])]),t._v(" "),e("h2",{attrs:{id:"create-the-pull-request-validation-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("#")]),t._v(" Create the Pull Request Validation Build")]),t._v(" "),e("p",[t._v("In "),e("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-2.html"}},[t._v("Challenge 2")]),t._v(" we configured the master branch's policies to require a "),e("em",[t._v("Pull Request")]),t._v(" before changes are merged into the master.\nWith Azure Pipelines you can define a build that is executed whenever a Pull Request is created in order to validate a merge into the master branch.")],1),t._v(" "),e("ol",[e("li",[t._v("Add a file named "),e("code",[t._v("scm-contacts-pr.yaml")]),t._v(" in the directory "),e("code",[t._v("day4-azdevops/apps/pipelines")])]),t._v(" "),e("li",[t._v("Add the following yaml snippet:")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Scm Contacts\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vmImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UseDotNet@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acquire .NET Core Sdk 3.1.x'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("packageType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sdk\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.1.x\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Restore\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" restore\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4-azdevops/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4-azdevops/apps/dotnetcore/Scm/**/*.csproj'")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DotNetCoreCLI@2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("displayName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" publish\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publishWebProjects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("projects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azdevops/apps/dotnetcore/Scm/Adc.Scm.Api/Adc.Scm.Api.csproj\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arguments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output $(build.artifactstagingdirectory)\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipAfterPublish")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Commit your changes and push the branch to your remote repository.")]),t._v(" "),e("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),e("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new pipeline")]),t._v(" "),e("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),e("li",[t._v("Select your repository")]),t._v(" "),e("li",[t._v("Select "),e("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),e("li",[t._v("Select your feature branch and specify the path: "),e("em",[t._v('"/day4-azdevops/apps/pipelines/scm-contacts-pr.yaml"')])]),t._v(" "),e("li",[t._v("Run your PR Build by clicking the action "),e("em",[t._v('"Run"')])]),t._v(" "),e("li",[t._v("Rename your PR Build to "),e("em",[t._v('"SCM-Contacts-PR"')])])]),t._v(" "),e("h2",{attrs:{id:"create-the-cd-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cd-build"}},[t._v("#")]),t._v(" Create the CD Build")]),t._v(" "),e("p",[t._v("Now we have created the deployment artifacts with the build "),e("em",[t._v("SCM-Contacts-CI")]),t._v(". It is time to create a Release build to deploy the SCM Contacts API to Azure. As in "),e("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[t._v("Challenge 3")]),t._v(" we deploy the artifacts to the stages "),e("em",[t._v("Development")]),t._v(" and "),e("em",[t._v("Testing")]),t._v(" and we create a manual "),e("em",[t._v("Pre-deployment condition")]),t._v(" to approve the deployment to the "),e("em",[t._v("Testing")]),t._v(" stage.")],1),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create a new release pipeline and name it "),e("em",[t._v("SCM-Contacts-CD")])])]),t._v(" "),e("li",[e("p",[t._v("Add the SCM-Contacts-CI build's artifacts")])]),t._v(" "),e("li",[e("p",[t._v("Create a "),e("em",[t._v("Development")]),t._v(" stage")])]),t._v(" "),e("li",[e("p",[t._v("Add the the following variables and replace "),e("strong",[t._v("'prefix'")]),t._v(" with your own value:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Scope")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ResourceGroupName")]),t._v(" "),e("td",[t._v("ADC-DAY4-SCM-DEV")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("Location")]),t._v(" "),e("td",[t._v("westeurope")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("ApiAppName")]),t._v(" "),e("td",[e("strong",[t._v("'prefix'")]),t._v("-day4scmapi-dev")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("AppServicePlanSKU")]),t._v(" "),e("td",[t._v("B1")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("Use32BitWorker")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("AlwaysOn")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("ApplicationInsightsName")]),t._v(" "),e("td",[t._v("your ApplicationInsights instance name of stage Development")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("SqlServerName")]),t._v(" "),e("td",[e("strong",[t._v("'prefix'")]),t._v("-day4sqlsrv-dev")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("SqlDatabaseName")]),t._v(" "),e("td",[t._v("scmcontactsdb")]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("SqlAdminUserName")]),t._v(" "),e("td",[e("em",[t._v("your Sql Admin's username")])]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("SqlAdminPassword")]),t._v(" "),e("td",[e("em",[t._v("your password")])]),t._v(" "),e("td",[t._v("Development")])]),t._v(" "),e("tr",[e("td",[t._v("ServiceBusNamespaceName")]),t._v(" "),e("td",[t._v("your ServiceBus namespace name of stage Development")]),t._v(" "),e("td",[t._v("Development")])])])])]),t._v(" "),e("li",[e("p",[t._v("Go to the Tasks section of the "),e("em",[t._v('"Development"')]),t._v(" stage and use the latest Ubuntu version to run the agent on")])]),t._v(" "),e("li",[e("p",[t._v("Add the task "),e("em",[t._v('"ARM template deployment"')])])]),t._v(" "),e("li",[e("p",[t._v("Select your Azure Subscription")])]),t._v(" "),e("li",[e("p",[t._v("Set the name of the ResourceGroup, use the variable $(ResourceGroupName)")])]),t._v(" "),e("li",[e("p",[t._v("Set the Location, use the variable $(Location)")])]),t._v(" "),e("li",[e("p",[t._v("Select the template from your drop location")])]),t._v(" "),e("li",[e("p",[t._v("Override the template parameters as follow:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sku")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("AppServicePlanSKU"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-webAppName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ApiAppName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-use32bitworker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("Use32BitWorker"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-alwaysOn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("AlwaysOn"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-applicationInsightsName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ApplicationInsightsName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sqlServerName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlServerName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sqlUserName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlAdminUserName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sqlPassword")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlAdminPassword"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sqlDatabaseName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SqlDatabaseName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-serviceBusNamespaceName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ServiceBusNamespaceName"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),e("p",[t._v("Make sure that you copy the whole line.")])]),t._v(" "),e("li",[e("p",[t._v("Add "),e("em",[t._v("Azure App Service deploy")]),t._v(" task")])]),t._v(" "),e("li",[e("p",[t._v("Select your Azure Subscription")])]),t._v(" "),e("li",[e("p",[t._v("Choose "),e("em",[t._v("API App")]),t._v(" as AppService type")])]),t._v(" "),e("li",[e("p",[t._v("Use the variable "),e("em",[t._v("$(ApiAppName)")]),t._v(" to set the App Service name")])]),t._v(" "),e("li",[e("p",[t._v("Add your dotnet core deployment zip file from your artifact location")])]),t._v(" "),e("li",[e("p",[t._v("Save the release definition and create a release to check if everything works")])])]),t._v(" "),e("h3",{attrs:{id:"create-the-testing-stage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-testing-stage"}},[t._v("#")]),t._v(" Create the "),e("em",[t._v("Testing")]),t._v(" stage")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Edit the Release definition and go to the task view")])]),t._v(" "),e("li",[e("p",[t._v("Clone the "),e("em",[t._v("Development")]),t._v(" stage and rename the cloned stage to "),e("em",[t._v("Testing")])])]),t._v(" "),e("li",[e("p",[t._v("Open the Release definition's variable view and add new variables as follow:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("Scope")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ResourceGroupName")]),t._v(" "),e("td",[t._v("ADC-DAY4-SCM-TEST")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("Location")]),t._v(" "),e("td",[t._v("westeurope")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("ApiAppName")]),t._v(" "),e("td",[e("strong",[t._v("'prefix'")]),t._v("-day4scmapi-test")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("AppServicePlanSKU")]),t._v(" "),e("td",[t._v("B1")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("Use32BitWorker")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("AlwaysOn")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("ApplicationInsightsName")]),t._v(" "),e("td",[t._v("your ApplicationInsights instance name of stage Testing")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("SqlServerName")]),t._v(" "),e("td",[e("strong",[t._v("'prefix'")]),t._v("-day4sqlsrv-test")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("SqlDatabaseName")]),t._v(" "),e("td",[t._v("scmcontactsdb")]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("SqlAdminUserName")]),t._v(" "),e("td",[e("em",[t._v("your Sql Admin's username")])]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("SqlAdminPassword")]),t._v(" "),e("td",[e("em",[t._v("your password")])]),t._v(" "),e("td",[t._v("Testing")])]),t._v(" "),e("tr",[e("td",[t._v("ServiceBusNamespaceName")]),t._v(" "),e("td",[t._v("your ServiceBus namespace name of stage Testing")]),t._v(" "),e("td",[t._v("Testing")])])])])]),t._v(" "),e("li",[e("p",[t._v("Save the definition and create a release")])])]),t._v(" "),e("h2",{attrs:{id:"create-a-pull-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-request"}},[t._v("#")]),t._v(" Create a Pull Request")]),t._v(" "),e("p",[t._v("Create a Pull Request and merge all changes into the master branch. Don't forget to link the User Stories S4 and S5.")]),t._v(" "),e("h2",{attrs:{id:"trigger-the-pr-build-to-validate-a-pull-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("#")]),t._v(" Trigger the PR-Build to validate a Pull Request")]),t._v(" "),e("p",[t._v("Now we have to enable the PR-Build to be triggered whenever a Pull Request is created and when files are changed that belongs to the SCM Contacts API.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Open the branch policies of the master branch")])]),t._v(" "),e("li",[e("p",[t._v("Add a build validation and select your SCM-Contacts-PR build")])]),t._v(" "),e("li",[e("p",[t._v("Set the path filter as follow:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("/day4-azdevops/apps/infrastructure/templates/scm-api-dotnetcore.json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("/day4-azdevops/apps/dotnetcore/Scm/*\n")])])]),e("p",[t._v("With this filter the PR build is only triggered when files were changed that belongs to the SCM Contacts API")])]),t._v(" "),e("li",[e("p",[t._v("Save your changes")])])]),t._v(" "),e("h2",{attrs:{id:"see-the-build-flow-in-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-the-build-flow-in-action"}},[t._v("#")]),t._v(" See the Build Flow in Action")]),t._v(" "),e("p",[t._v("Now it's time to see the whole build flow in action.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Checkout the master branch and pull the latest changes")])]),t._v(" "),e("li",[e("p",[t._v("Create and checkout a new feature branch "),e("em",[t._v("features/scmcontactsflow")])])]),t._v(" "),e("li",[e("p",[t._v("Open the file "),e("a",{attrs:{href:"../apps/dotnetcore/Scm/Adc.Scm.Api/Startup.cs"}},[t._v("day4-azdevops/apps/dotnetcore/Scm/Adc.Scm.Api/Startup.cs")]),t._v(" and change the name of the API in the Swagger configurations:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here")]),t._v("\nc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerDoc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("OpenApiInfo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Title "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADC Contacts API"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and here")]),t._v("\nc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/swagger/v1/swagger.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADC Contacts API v1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Commit your changes and push the feature branch to your remote repository")])]),t._v(" "),e("li",[e("p",[t._v("Create a "),e("em",[t._v("Pull Request")]),t._v(" to merge the changes into the master branch. Don't forget to link the User Story S5.\nYou will see that the PR-Build is part of the required policies of your Pull Request.\n"),e("img",{attrs:{src:a(248),alt:"PullRequest"}})])]),t._v(" "),e("li",[e("p",[t._v("Complete your Pull Request")])]),t._v(" "),e("li",[e("p",[t._v("Navigate to the Pipelines view and you will notice that the SCM-Contacts-CI build is triggered\n"),e("img",{attrs:{src:a(537),alt:"SCM-Contact-CI"}}),t._v("\nWait until the build is finished and the deployment artifacts are available.")])]),t._v(" "),e("li",[e("p",[t._v("Navigate to the Release view and you will see that the CD Pipeline is triggered and starts to deploy the artifacts to the Development stage.")])]),t._v(" "),e("li",[e("p",[t._v("Go to Azure Boards and set the User Stories S4 and S5 to completed.")])])]),t._v(" "),e("h2",{attrs:{id:"wrap-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[t._v("#")]),t._v(" Wrap-Up")]),t._v(" "),e("p",[t._v("🥳 "),e("strong",[t._v("Congratulation")]),t._v(" - You have completed the User Stories S4 and S5. 🥳")]),t._v(" "),e("p",[t._v("Now you have seen how you can create a "),e("em",[t._v("Pull Request validation build")]),t._v(" that protects your master branch from build breaks. After changes are merged into the master branch, the CI build is triggered and it creates the deployment artifacts. The deployment artifacts are then deployed to your stages. After this challenge we have the following architecture deployed to Azure:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(538),alt:"SCM Contacts API"}})]),t._v(" "),e("p",[t._v("Now navigate to the Azure portal, open the SCM Contacts API's API App in the ResourceGroup "),e("code",[t._v("ADC-DAY4-SCM-TEST")]),t._v(" and browse to the Swagger UI.\nIf you want you can test the API.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),e("RouterLink",{attrs:{to:"/day4-azdevops/"}},[t._v("🔼 Day 4")]),t._v(" | "),e("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-5.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);