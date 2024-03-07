<div align="center">

# Miro Beam

A simple tool to automatically create embedded content on Miro board from the pasted link.

[Getting Started](#getting-started) •
[Miro](#miro) •
[Deployment](#deployment)

</div>

## Getting Started

1. Set the `DOCKER_USER` environment variable:
   
   - ```bash
     export DOCKER_USER="$(id -u):$(id -g)"
     ```

1. Install the project dependencies:

   - ```bash
     docker compose run -ti --rm app yarn --frozen-lockfile
     ```

1. Start developing locally:

   - ```bash
     docker compose up
     ```

1. This runs `yarn start` in a Docker container. Alternatively, you can use `yarn` installed in your local machine.

## Miro

### Create and configure Miro app

1. [Sign in](https://miro.com/login/) to Miro, and then create a
   [Developer team](https://developers.miro.com/docs/create-a-developer-team)
   under your user account.

1. [Create an app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-your-app-in-miro).

   - Click the **Create new app** button.
   - On the **Create new app** modal, give your app a name, assign it to your
  Developer team, and then click **Create**.

1. Configure the app:

   - In your account profile, go to **Your apps**, and then select the app you just
  created to access its configuration page.
   - Go to **App URL** and enter the following URL: `http://localhost:3000`
   - Lastly, go to **Permissions**, and select the following permissions:
     - `board:read`
     - `board:write`

## Deployment

### GitHub Pages

1. Deployment to GitHub Pages is triggered manually using the **Deploy to GitHub Pages** GitHub workflow.

1. Deployment can only be done using the `main` branch.
