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
