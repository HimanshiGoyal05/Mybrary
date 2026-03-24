const rootStyles= window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large')!=null && rootStyles.getPropertyValue('--book-cover-width-large')!=''){
  ready()
} else{
  document.getElementById('main-css').addEventListener('load', ready)
}

function ready(){

  const coverWidth=parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
  const coverAspectRation=parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ration'))
  const coverHeight=coverWidth/coverAspectRation

  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  );

  FilePond.setOptions({
    stylePanelAspectRatio: 1/coverAspectRation,
    imageResizeTargetHeight: coverHeight,
    imageResizeTargetWidth: coverWidth,
    credits:false
  });

  FilePond.parse(document.body);
}