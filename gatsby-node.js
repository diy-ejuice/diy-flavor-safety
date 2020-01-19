const { resolve } = require(`path`);

const createPages = async (
  baseUrl,
  component,
  query,
  slugBuilder,
  { actions, graphql, reporter }
) => {
  const { createPage } = actions;
  const result = await graphql(query);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.pageJson.nodes.forEach(node => {
    const slug = slugBuilder(node)
      .replace(/\s+/g, '-')
      .toLowerCase();
    const path = `/${baseUrl}/${slug}`;

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
    resolve('src/pages/vendor.js'),
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
    node => `${node.code} ${node.name}`,
    options
  );

const createIngredientPages = options =>
  createPages(
    'ingredient',
    resolve('src/pages/ingredient.js'),
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
    node => node.name,
    options
  );

const createFlavorPages = options =>
  createPages(
    'flavor',
    resolve('src/pages/flavor.js'),
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
    node => `${node.vendor} ${node.name}`,
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
        '~pages': resolve(__dirname, 'src/pages')
      }
    }
  });
};
