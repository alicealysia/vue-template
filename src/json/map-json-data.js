function mapJsonData (arr) {
    return arr.map(value => {
      const image = require(`@/assets/slideshows/${value.image}.jpg`);
      return {
        title: value.title || undefined,
        text: value.text || undefined,
        link: value.link || undefined,
        image
      }
    });
}

export {mapJsonData};