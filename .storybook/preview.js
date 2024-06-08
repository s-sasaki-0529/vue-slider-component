export const parameters = {
  docsOnly: true,
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: 'docs',
}

export const decorators = [
  // Paddings to allow tooltips to fit in the viewport.
  story => {
    return {
      template: `
        <div style="padding: 25px"><story /></div>
      `,
    }
  },
]
export const tags = ['autodocs'];
