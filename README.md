# [mediastreamingmesh.io](https://mediastreamingmesh.io/)

![MSM logo](/public/assets/shared/logos/logo-light-horizontal-svg.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/77afb082-feb4-498c-88cc-eff8fea128ba/deploy-status)](https://app.netlify.com/sites/apiclarity/deploys)

This is the repository for [mediastreamingmesh.io](https://mediastreamingmesh.io/), the website
containing information on [Media Streaming Mesh](https://github.com/media-streaming-mesh/mediastreamingmesh.io).

## Deployment

The `main` branch is built as a static Next.js export and deployed to GitHub Pages by
`.github/workflows/pages.yml`. The site uses `mediastreamingmesh.io` as its custom domain.

DNS is managed in the Route 53 hosted zone `Z017608319UQMQ9K3N0Z7`. The DNS workflow
validates the public records nightly and can apply the GitHub Pages apex and `www` records
manually when the repository's `AWS_ROUTE53_ROLE_ARN` secret is configured for GitHub OIDC.

## Getting Started

Install `node_modules`:

```bash
yarn
```

Run the project in development mode:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in development mode.

It is helpful to build the project before committing code, in case there are any issues uncaught by development mode.

Build and export the project:

```bash
yarn build
```

Launch the build locally:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in production mode.

*Note: Next/Image is not currently working when using next export, so we are using standard HTML img tags for now. In the future, we will either stop using export or the issue will be fixed and we will update accordingly.*

### Technologies Used

- React/NextJS
- Sass
- TypeScript
