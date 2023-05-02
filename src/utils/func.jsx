let isValidHttpUrl = (string) => {
    try {
      const newUrl = new URL(string);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
  }

let retrivePreview = (source) => {
    if (source.data.preview != undefined) {
        return source.data.preview.images[0].source.url;
    } else {
        return source.data.thumbnail;
    }
    //obj = {}
    return obj;
}

let unEscape = (htmlStr) => {
    htmlStr = htmlStr.replace(/&lt;/g , "<");	 
    htmlStr = htmlStr.replace(/&gt;/g , ">");     
    htmlStr = htmlStr.replace(/&quot;/g , "\"");  
    htmlStr = htmlStr.replace(/&#39;/g , "\'");   
    htmlStr = htmlStr.replace(/&amp;/g , "&");
    return htmlStr;
}

export {isValidHttpUrl, retrivePreview, unEscape}