const { resolve } = require('path');
const {
  getFlavorSlug,
  getIngredientSlug,
  getVendorSlug
} = require('./src/utils');

const createPages = async (
  pageName,
  query,
  slugBuilder,
  { actions, graphql, reporter }
) => {
  const { createPage } = actions;
  const result = await graphql(query);
  const component = resolve(`src/pages/${pageName}.js`);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.pageJson.nodes.forEach(node => {
    const path = slugBuilder(node);

    reporter.info(`Created page for ${path}`);
    createPage({
      context: node,
      component,
      path
    });
  });
};

const createVendorPages = options =>
  createPages(
    'vendor',
    `
{
  pageJson: allVendorsJson {
    nodes {
      code
      name
    }
  }
}
`,
    getVendorSlug,
    options
  );

const createIngredientPages = options =>
  createPages(
    'ingredient',
    `
{
  pageJson: allIngredientsJson {
    nodes {
      name
      casNumber
    }
  }
}
`,
    getIngredientSlug,
    options
  );

const createFlavorPages = options =>
  createPages(
    'flavor',
    `
{
  pageJson: allFlavorsJson {
    nodes {
      name
      vendor
      ingredients
    }
  }
}
`,
    getFlavorSlug,
    options
  );

exports.createPages = async options => {
  await createFlavorPages(options);
  await createVendorPages(options);
  await createIngredientPages(options);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': resolve(__dirname, 'src/components'),
        '~pages': resolve(__dirname, 'src/pages'),
        '~utils': resolve(__dirname, 'src/utils'),
        '~workers': resolve(__dirname, 'src/workers')
      }
    }
  });
};
