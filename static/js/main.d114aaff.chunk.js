(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imgLoading:"ImageLoader_imgLoading__2IQe0",imgLoaded:"ImageLoader_imgLoaded__ng3UH",fadeInImg:"ImageLoader_fadeInImg__8LliS"}},11:function(e,t,a){e.exports={backDrop:"Modal_backDrop__o9pjg",content:"Modal_content__1XouO",img:"Modal_img__22i9_"}},12:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__2SOZC",searchInput:"SearchForm_searchInput__18hU9"}},2:function(e,t,a){e.exports={galleryItem:"GalleryItem_galleryItem__3yPYk",itemImg:"GalleryItem_itemImg__1p-Ew",stats:"GalleryItem_stats__30NXv",statsItem:"GalleryItem_statsItem__12n6w",fullscreenButton:"GalleryItem_fullscreenButton__3yCYK",buttonIcon:"GalleryItem_buttonIcon__1eoLx"}},26:function(e,t,a){e.exports={spinner:"Spinner_spinner__21-z2"}},28:function(e,t,a){e.exports={button:"Button_button__1f6mj"}},29:function(e,t,a){e.exports={gallery:"Gallery_gallery__2kJ4Y"}},30:function(e,t,a){e.exports={text:"TextError_text__2hzKC"}},31:function(e,t,a){e.exports={app:"App_app__3D29V"}},33:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(9),s=a.n(c),i=a(24),m=a(13),u=a(3),p=a(4),d=a(5),g=a(6),h=a(25),f=a.n(h),_=a(26),v=a.n(_),b=function(){return r.a.createElement(f.a,{className:v.a.spinner,name:"ball-grid-pulse",color:"green",fadeIn:"none"})},y=a(27),E=a.n(y),k=a(10),I=a.n(k),w={},C=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loaded:w[e.props.src]},e.onLoad=function(){w[e.props.src]=!0,e.setState((function(){return{loaded:!0}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.loadedClassName,n=e.loadingClassName;return t="".concat(t," ").concat(this.state.loaded?a:n),r.a.createElement("img",{src:this.props.src,onClick:this.props.onClick,className:t,onLoad:this.onLoad,alt:"fullscreenimage"})}}]),a}(n.Component);C.defaultProps={className:"",loadingClassName:I.a.imgLoading,loadedClassName:I.a.imgLoaded};var N=a(11),S=a.n(N),L=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).backdropRef=Object(n.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDropClick=function(t){var a=e.backdropRef.current;a&&a!==t.target||e.props.onClose()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.imgUrl;return r.a.createElement("div",{className:S.a.backDrop,ref:this.backdropRef,onClick:this.handleBackDropClick,onKeyPress:function(){}},r.a.createElement("div",{className:S.a.content},r.a.createElement(E.a,null,r.a.createElement(C,{src:e}))))}}]),a}(n.Component),O=a(12),j=a.n(O),x=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){var a=t.target.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.value;(0,e.props.onSubmit)(a),e.reset()},e.reset=function(){return e.setState({value:""})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("form",{className:j.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,className:j.a.searchInput,type:"text",autoComplete:"off",placeholder:"Search images...",value:e}))}}]),a}(n.Component),F=a(28),M=a.n(F),U=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",onClick:t,className:M.a.button},"Load More")},R=a(29),D=a.n(R),P=a(2),G=a.n(P),B=function(e){var t=e.largeImageURL,a=e.webformatURL,n=e.likes,o=e.views,l=e.comments,c=e.downloads,s=e.tags,i=e.onClick;return r.a.createElement("li",{className:G.a.galleryItem,"data-fullviewimg":t},r.a.createElement("img",{className:G.a.itemImg,src:a,alt:s}),r.a.createElement("div",{className:G.a.stats},r.a.createElement("p",{className:G.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),n),r.a.createElement("p",{className:G.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),o),r.a.createElement("p",{className:G.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),l),r.a.createElement("p",{className:G.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),c),r.a.createElement("p",{className:G.a.statsItem},r.a.createElement("i",{className:"material-icons"},"tags"),c)),r.a.createElement("button",{onClick:function(){return i(t)},type:"button",className:G.a.fullscreenButton},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},K=function(e){var t=e.items,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:D.a.gallery},t.map((function(e){return r.a.createElement(B,{key:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads,tags:e.tags,onClick:a})}))))},A=a(30),Q=a.n(A),z=function(e){var t=e.children;return r.a.createElement("p",{className:Q.a.text},t)},J=a(31),Y=a.n(J),q=a(32),H=a.n(q),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="1014829-71a7f403d3f00bee795338530";return H.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},W=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],Loading:!1,error:null,notFound:!1,page:1,isModal:!1,fullviewimg:"",value:""},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({Loading:!0}),T(a,n).then((function(t){if(0===t.length)return e.setState({images:[],notFound:!0});e.setState((function(e){return{images:[].concat(Object(m.a)(e.images),Object(m.a)(t)),page:e.page+1,notFound:!1,error:null}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({Loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.scrollPage=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState((function(e){return{page:e.page+1}})),t.next=3,e.fetchImages();case 3:case"end":return t.stop()}}),t)}))),e.handleCloseModal=function(){return e.setState({isModal:!1})},e.handleOpenModal=function(t){return e.setState({isModal:!0,fullviewimg:t})},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.images.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.Loading,n=e.error,o=e.notFound,l=e.isModal,c=e.fullviewimg;return r.a.createElement("div",{className:Y.a.app},r.a.createElement(x,{onSubmit:this.handleSearchFormSubmit}),!!t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{items:t,onClick:this.handleOpenModal}),r.a.createElement(U,{onClick:this.scrollPage})),a&&r.a.createElement(b,null),o&&r.a.createElement(z,null,"Not Found images! "),n&&r.a.createElement(z,null,"Whoops, something went wrong: ",n.message," "),l&&r.a.createElement(L,{onClose:this.handleCloseModal,imgUrl:c}))}}]),a}(n.Component);a(81);l.a.render(r.a.createElement(W,null),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d114aaff.chunk.js.map