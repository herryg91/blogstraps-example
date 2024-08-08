export const blogstrapsDefaultCSS = `:root{--bs-main-bg-color:#ffffff;--bs-main-text-color:#291334;--bs-color-primary:#65c3c8;--bs-text-gray:#9b9a97;--bs-text-brown:#64473a;--bs-text-red:#e03e3e;--bs-text-orange:#d9730d;--bs-text-yellow:#dfab01;--bs-text-green:#4d6461;--bs-text-blue:#0b6e99;--bs-text-purple:#6940a5;--bs-text-pink:#ad1a72;--bs-bg-gray:#ebeced;--bs-bg-brown:#e9e5e3;--bs-bg-red:#fbe4e4;--bs-bg-orange:#f6e9d9;--bs-bg-yellow:#fbf3db;--bs-bg-green:#ddedea;--bs-bg-blue:#ddebf1;--bs-bg-purple:#eae4f2;--bs-bg-pink:#f4dfeb}#bs-blog{padding:2rem;max-width:64rem;margin-left:auto;margin-right:auto}.bs-dot{width:4px;height:4px;background-color:gray;border-radius:50%;min-width:4px;min-height:4px}.bs-text-gray{color:var(--bs-text-gray)}.bs-text-brown{color:var(--bs-text-brown)}.bs-text-red{color:var(--bs-text-red)}.bs-text-orange{color:var(--bs-text-orange)}.bs-text-yellow{color:var(--bs-text-yellow)}.bs-text-green{color:var(--bs-text-green)}.bs-text-blue{color:var(--bs-text-blue)}.bs-text-purple{color:var(--bs-text-purple)}.bs-text-pink{color:var(--bs-text-pink)}.bs-bg-gray{background-color:var(--bs-bg-gray)}.bs-bg-brown{background-color:var(--bs-bg-brown)}.bs-bg-red{background-color:var(--bs-bg-red)}.bs-bg-orange{background-color:var(--bs-bg-orange)}.bs-bg-yellow{background-color:var(--bs-bg-yellow)}.bs-bg-green{background-color:var(--bs-bg-green)}.bs-bg-blue{background-color:var(--bs-bg-blue)}.bs-bg-purple{background-color:var(--bs-bg-purple)}.bs-bg-pink{background-color:var(--bs-bg-pink)}.bs-align-center{text-align:center}.bs-align-right{text-align:right}.bs-align-justify{text-align:justify}img.bs-align-center{margin-left:auto;margin-right:auto}img.bs-align-right{margin-left:auto}.bs-index-title{font-size:1.875rem;line-height:2.25rem;font-weight:700;text-align:center}.bs-navbar-menu{margin:2rem auto;display:flex;flex-wrap:wrap;justify-content:center;border:1px solid #cccfd1;border-width:1px 0}.bs-navbar-menu .navbar-menu-item{height:3rem;flex-shrink:0;padding:0 .75rem}.bs-navbar-menu .navbar-menu-item:hover{background-color:#f0f0f0}.bs-navbar-menu .navbar-menu-item a{letter-spacing:-.15px;align-items:center;display:flex;height:100%;margin:0;text-decoration:none}.bs-navbar-menu .navbar-menu-item.selected a{font-weight:700;box-shadow:inset 0 -2px 0 var(--bs-color-primary);color:var(--bs-color-primary)}.bs-navbar-menu .navbar-menu-item .navbar-menu-search{letter-spacing:-.15px;align-items:center;display:flex;height:100%;margin:0;text-decoration:none;cursor:pointer}.bs-search-box{display:flex;border-radius:.5rem;box-shadow:0 1px 2px 0 rgb(0 0 0 / .05);margin-top:1rem;margin-bottom:1rem;max-width:24rem;width:100%;margin-left:auto;margin-right:auto}.bs-search-box-hidden{display:none}.bs-search-box input{padding-top:.75rem;padding-bottom:.75rem;padding-left:1rem;padding-right:1rem;display:block;width:100%;border-color:#e5e7eb;box-shadow:0 1px 2px 0 rgb(0 0 0 / .05);border-start-start-radius:.5rem;border-end-start-radius:.5rem;font-size:.875rem;line-height:1.25rem}.bs-search-box input:focus{border-color:var(--bs-color-primary)}.bs-search-box input:disabled{opacity:.5;pointer-events:none}.bs-search-box button{width:2.875rem;height:2.875rem;flex-shrink:0;display:inline-flex;justify-content:center;align-items:center;column-gap:.5rem;font-size:.875rem;line-height:1.25rem;font-weight:600;border-start-end-radius:.375rem;border-end-end-radius:.375rem;border-width:1px;border-color:#fff0;background-color:var(--bs-color-primary);fill:#fff}.bs-search-box button:hover{background-color:var(--bs-color-primary);filter:brightness(85%)}.bs-search-box button:disabled{opacity:.5;pointer-events:none}.bs-index-posts{display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}.bs-index-posts .bs-index-post{display:flex;flex-direction:column;row-gap:.75rem}.bs-index-posts .bs-index-post img{border-radius:.75rem;aspect-ratio:16 / 9;object-fit:cover;width:100%}.bs-index-posts .bs-index-post:hover img{border-width:1px}.bs-index-posts .bs-index-post .bs-index-post-meta{display:flex;font-size:.75rem;line-height:1rem;column-gap:.5rem;align-items:center}.bs-index-posts .bs-index-post .bs-index-post-title{font-size:1.25rem;line-height:1.75rem;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.bs-index-posts .bs-index-post:hover .bs-index-post-title{color:var(--bs-color-primary)}.bs-index-posts .bs-index-post .bs-index-post-summary{overflow:hidden;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box}.bs-index-posts .bs-index-post .bs-index-post-meta{overflow-x:auto}.bs-index-posts .bs-index-post .bs-index-post-meta div{white-space:nowrap}@media (min-width:640px){.bs-index-posts{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}}@media (min-width:768px){.bs-index-posts{grid-template-columns:repeat(3,minmax(0,1fr));gap:2rem}}.bs-pagination{margin-top:2rem;margin-bottom:2rem;display:flex;align-items:center;justify-content:center;width:100%}.bs-pagination ul{list-style-type:none;display:flex}.bs-pagination ul li a{position:relative;display:block;border-radius:9999px;background-color:#fff0;padding-left:.75rem;padding-right:.75rem;padding-top:.375rem;padding-bottom:.375rem;font-size:.875rem;line-height:1.25rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;transition-duration:300ms}.bs-pagination ul li a.disabled{pointer-events:none;opacity:.5}.bs-pagination ul li a.readonly{pointer-events:none}.bs-pagination ul li a.selected{background-color:var(--bs-color-primary);font-weight:500}.bs-pagination ul li a.selected:hover{background-color:var(--bs-color-primary)}.bs-pagination ul li a:hover{background-color:#e5e7eb}.bs-pagination ul li a:focus{background-color:#e5e7eb;color:var(--bs-color-primary);outline:2px solid #fff0;outline-offset:2px}.bs-pagination ul li a:active{background-color:#e5e7eb;color:var(--bs-color-primary)}.bs-pagination ul li a:disabled{pointer-events:none;background-color:#fff0}#bs-post{margin-left:auto;margin-right:auto;max-width:48rem}#bs-post .title{font-size:2rem;line-height:2.25rem;font-weight:700;margin-top:1rem;margin-bottom:.25rem}#bs-post .subtitle{color:#6b7280;margin-bottom:1rem}#bs-post .publish-container{display:flex;text-transform:uppercase;column-gap:.75rem;margin-bottom:1.5rem;font-size:.75rem;line-height:1rem;align-items:center}#bs-post .author-avatar{position:relative;display:inline-flex}#bs-post .author-avatar>div{display:block;aspect-ratio:1 / 1;overflow:hidden;border-radius:9999px;width:48px;height:48px}#bs-post .publish-container .publish-info{display:flex;flex-direction:column;row-gap:.375rem;justify-content:center}#bs-post .publish-container .publish-info .publish-date{text-transform:uppercase}#bs-post .categories{display:flex;column-gap:.5rem;align-items:center;font-size:.75rem;text-transform:uppercase}#bs-post .categories a:hover{text-decoration:underline}#bs-post .post-body{font-size:1.125rem;line-height:1.75rem;line-height:2rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#bs-post .post-body h2{font-size:1.875rem;line-height:2.25rem;font-weight:700;margin-top:1rem;margin-bottom:.625rem}#bs-post .post-body h3{font-size:1.5rem;line-height:2rem;font-weight:700;margin-top:1rem;margin-bottom:.625rem}#bs-post .post-body h4{font-size:1.25rem;line-height:1.75rem;font-weight:700;margin-top:1rem;margin-bottom:.625rem}#bs-post .post-body .paragraph{margin-bottom:1rem}#bs-post .post-body p{margin-bottom:1rem}#bs-post .post-body a{color:var(--bs-color-primary)}#bs-post .post-body a:hover{text-decoration:underline}#bs-post .post-body ul{padding-left:1rem;margin-bottom:1rem;list-style-type:disc;list-style-position:outside}#bs-post .post-body ul ul{margin-bottom:0rem;list-style-type:revert;padding-inline-start:1.5rem}#bs-post .post-body ol{margin-bottom:1rem;list-style-type:decimal;list-style-position:outside}#bs-post .post-body ol ol{margin-bottom:0rem;list-style-type:revert;padding-inline-start:1.5rem}#bs-post .post-body .bs-image{margin-top:1rem;margin-bottom:1rem;text-align:center}#bs-post .post-body .bs-image .caption{font-size:.875rem;line-height:1.25rem;font-weight:400}#bs-post .post-body .bs-image.bs-align-center img{margin-left:auto;margin-right:auto}#bs-post .post-body .bs-image.bs-align-right img{margin-left:auto}#bs-post .footer{display:flex;justify-content:space-between;margin-top:2rem;margin-bottom:2rem;align-items:center}#bs-post .footer .back-link{margin-bottom:1rem;font-size:.875rem;line-height:1.25rem;display:flex;align-items:center;column-gap:.25rem}#bs-post .footer .back-link:hover{text-decoration:underline}#bs-post .footer .share{display:flex;column-gap:1rem}#bs-post .footer .share a{border-radius:.25rem;width:2rem;height:2rem;padding:.5rem;fill:#fff;stroke:none}#bs-post .footer .share a.share-fb{background-color:#3b5998;border-color:#3b5998}#bs-post .footer .share a.share-twitter{background-color:#000;border-color:#000}#bs-post .footer .share a.share-linkedin{background-color:#0077b5;border-color:#0077b5}#bs-post .footer .share a.share-wa{background-color:#25D366;border-color:#25D366}.bs-powered>a:hover{box-shadow:0 1px 3px 0 rgb(0 0 0 / .1),0 1px 2px -1px rgb(0 0 0 / .1)}`
export const blogstrapsDefaultCSSRaw = `
:root {
    --bs-main-bg-color: #ffffff;
    --bs-main-text-color: #291334;

    --bs-color-primary: #65c3c8;
    --bs-text-gray: #9b9a97;
    --bs-text-brown: #64473a;
    --bs-text-red: #e03e3e;
    --bs-text-orange: #d9730d;
    --bs-text-yellow: #dfab01;
    --bs-text-green: #4d6461;
    --bs-text-blue: #0b6e99;
    --bs-text-purple: #6940a5;
    --bs-text-pink: #ad1a72;

    --bs-bg-gray: #ebeced;
    --bs-bg-brown: #e9e5e3;
    --bs-bg-red: #fbe4e4;
    --bs-bg-orange: #f6e9d9;
    --bs-bg-yellow: #fbf3db;
    --bs-bg-green: #ddedea;
    --bs-bg-blue: #ddebf1;
    --bs-bg-purple: #eae4f2;
    --bs-bg-pink: #f4dfeb;
}
#bs-blog {
    padding: 2rem;
    /* color: #868787; */
    max-width: 64rem; /* 1024px */
    margin-left: auto;
    margin-right: auto;

    
    /* --bs-color-primary-contrast: #030e0f;
    --bs-color-secondary: #eeaf3a;
    --bs-color-secondary-contrast: #030e0f; */

    /* --bs-color-content: #030e0f; */
    /* --bs-color-content-500: #6b7280; */
    /* --bs-color-content-100: #fff; */

}

.bs-dot {
    width: 4px; 
    height: 4px; 
    background-color: gray; 
    border-radius: 50%; 
    min-width: 4px; 
    min-height: 4px;
}

.bs-text-gray { color: var(--bs-text-gray) }
.bs-text-brown { color: var(--bs-text-brown) }
.bs-text-red { color: var(--bs-text-red) }
.bs-text-orange { color: var(--bs-text-orange) }
.bs-text-yellow { color: var(--bs-text-yellow) }
.bs-text-green { color: var(--bs-text-green) }
.bs-text-blue { color: var(--bs-text-blue) }
.bs-text-purple { color: var(--bs-text-purple) }
.bs-text-pink { color: var(--bs-text-pink) }

.bs-bg-gray { background-color: var(--bs-bg-gray) }
.bs-bg-brown { background-color: var(--bs-bg-brown) }
.bs-bg-red { background-color: var(--bs-bg-red) }
.bs-bg-orange { background-color: var(--bs-bg-orange) }
.bs-bg-yellow { background-color: var(--bs-bg-yellow) }
.bs-bg-green { background-color: var(--bs-bg-green) }
.bs-bg-blue { background-color: var(--bs-bg-blue) }
.bs-bg-purple { background-color: var(--bs-bg-purple) }
.bs-bg-pink { background-color: var(--bs-bg-pink) }

.bs-align-center { text-align: center; }
.bs-align-right { text-align: right; }
.bs-align-justify { text-align: justify; }
img.bs-align-center { margin-left: auto; margin-right: auto;}
img.bs-align-right { margin-left: auto;}

/* Page Index */

.bs-index-title {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: 700;
    text-align: center;
}

.bs-navbar-menu {
    margin: 2rem auto;
    /* padding: .5rem 0; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #cccfd1;
    border-width: 1px 0;
    
}
.bs-navbar-menu .navbar-menu-item {
    height: 3rem;
    flex-shrink: 0;
    padding: 0 .75rem;
} 



.bs-navbar-menu .navbar-menu-item:hover {
    background-color: #f0f0f0;
}


.bs-navbar-menu .navbar-menu-item a {
    letter-spacing: -.15px;
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0;
    text-decoration: none;
}

.bs-navbar-menu .navbar-menu-item.selected a {
    font-weight: 700;
    box-shadow: inset 0 -2px 0 var(--bs-color-primary);
    color: var(--bs-color-primary);
}

.bs-navbar-menu .navbar-menu-item .navbar-menu-search {
    letter-spacing: -.15px;
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
}

.bs-search-box {
    display: flex;
    border-radius: 0.5rem; /* 8px */
    box-shadow: 0 1px 2px 0 rgb(0 0     0 / 0.05);
    margin-top: 1rem; /* 16px */
    margin-bottom: 1rem; /* 16px */
    max-width: 24rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.bs-search-box-hidden {
    display: none;
}

.bs-search-box input {
    padding-top: 0.75rem; /* 12px */
    padding-bottom: 0.75rem; /* 12px */
    padding-left: 1rem; /* 16px */
    padding-right: 1rem; /* 16px */
    display: block;
    width: 100%;
    border-color: rgb(229 231 235);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-start-start-radius: 0.5rem; /* 8px */
    border-end-start-radius: 0.5rem; /* 8px */
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
}

.bs-search-box input:focus {
    /* z-index: 10; */
    border-color: var(--bs-color-primary);
    /* fill: white; */
}

.bs-search-box input:disabled {
    opacity: 0.5;
    pointer-events: none;
}

.bs-search-box button {
    width: 2.875rem;
    height: 2.875rem;
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem; /* 8px */
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    font-weight: 600;
    border-start-end-radius: 0.375rem; /* 6px */
    border-end-end-radius: 0.375rem; /* 6px */
    border-width: 1px;
    border-color: transparent;
    background-color: var(--bs-color-primary);
    fill: rgb(255 255 255);
}
.bs-search-box button:hover {
    background-color: var(--bs-color-primary);
    filter: brightness(85%);
}
.bs-search-box button:disabled {
    opacity: 0.5;
    pointer-events: none;
}

.bs-index-posts {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.bs-index-posts .bs-index-post {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem; /* 12px */
}

.bs-index-posts .bs-index-post img {
    border-radius: 0.75rem; /* 12px */
    aspect-ratio: 16 / 9;
    object-fit: cover;
    width: 100%;
}

.bs-index-posts .bs-index-post:hover img {
    border-width: 1px;
}

.bs-index-posts .bs-index-post .bs-index-post-meta {
    display: flex;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    column-gap: 0.5rem; /* 8px */
    align-items: center;
}

.bs-index-posts .bs-index-post .bs-index-post-title {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}

.bs-index-posts .bs-index-post:hover .bs-index-post-title {
    color: var(--bs-color-primary);
}

.bs-index-posts .bs-index-post .bs-index-post-summary { 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}

.bs-index-posts .bs-index-post .bs-index-post-meta {
    overflow-x: auto;
}
.bs-index-posts .bs-index-post .bs-index-post-meta div {
    white-space: nowrap;
}

@media (min-width: 640px) { 
    .bs-index-posts {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem; /* 16px */
    }
}
@media (min-width: 768px) {
    .bs-index-posts {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem; /* 32px */
    }
}


.bs-pagination {
    margin-top: 2rem; /* 32px */
    margin-bottom: 2rem; /* 32px */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.bs-pagination ul {
    list-style-type: none;
    display: flex;
}

.bs-pagination ul li a {
    position: relative;
    display: block;
    border-radius: 9999px;
    background-color: transparent;
    padding-left: 0.75rem; /* 12px */
    padding-right: 0.75rem; /* 12px */
    padding-top: 0.375rem; /* 6px */
    padding-bottom: 0.375rem; /* 6px */
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 300ms;
     
}

.bs-pagination ul li a.disabled {
    pointer-events: none;
    opacity: 0.5;
}

.bs-pagination ul li a.readonly {
    pointer-events: none;
}

.bs-pagination ul li a.selected {
     background-color: var(--bs-color-primary);
     font-weight: 500;
}

.bs-pagination ul li a.selected:hover {
    background-color: var(--bs-color-primary);
}



.bs-pagination ul li a:hover {
    background-color: rgb(229 231 235);
}


.bs-pagination ul li a:focus {
    background-color: rgb(229 231 235);
    color: var(--bs-color-primary);
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.bs-pagination ul li a:active {
    background-color: rgb(229 231 235);
    color: var(--bs-color-primary);
}

.bs-pagination ul li a:disabled {
    pointer-events: none;
    background-color: transparent;
}

/* Blog Posts Section */

#bs-post {
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem; /* 768px */
}

#bs-post .title {
    font-size: 2rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: 700;
    margin-top: 1rem; /* 16px */
    margin-bottom: 0.25rem; /* 4px */
}

#bs-post .subtitle {
    /* color: var(--bs-color-content-500); */
    color: #6b7280;
    margin-bottom: 1rem; /* 16px */
}


#bs-post .publish-container {
    display: flex;
    text-transform: uppercase;
    column-gap: 0.75rem; /* 12px */
    margin-bottom: 1.5rem; /* 24px */
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    align-items: center;
}


#bs-post .author-avatar {
    position: relative;
    display: inline-flex;
}
#bs-post .author-avatar>div {
    display: block;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 9999px;
    width: 48px;
    height: 48px;
    
}

#bs-post .publish-container .publish-info {
    display: flex;
    flex-direction: column;
    row-gap: 0.375rem; /* 6px */
    justify-content: center;
}

#bs-post .publish-container .publish-info .publish-date {
    /* color: var(--bs-color-content-500); */
    text-transform: uppercase;
}

#bs-post .categories {
    display: flex;
    column-gap: 0.5rem; /* 8px */
    align-items: center;
    font-size: 0.75rem; /* 12px */
    text-transform: uppercase;
    /* color: var(--bs-color-content-500); */
}

#bs-post .categories a:hover {
    text-decoration: underline;
}


#bs-post .post-body {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#bs-post .post-body h2 {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: 700;
    margin-top: 1rem; /* 16px */
    margin-bottom: 0.625rem; /* 10px */
}

#bs-post .post-body h3 {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: 700;
    margin-top: 1rem; /* 16px */
    margin-bottom: 0.625rem; /* 10px */
}

#bs-post .post-body h4 {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    font-weight: 700;
    margin-top: 1rem; /* 16px */
    margin-bottom: 0.625rem; /* 10px */
}


#bs-post .post-body .paragraph {
    margin-bottom: 1rem; /* 16px */
}

#bs-post .post-body p {
    margin-bottom: 1rem; /* 16px */
}


#bs-post .post-body a {
    color: var(--bs-color-primary);
}
#bs-post .post-body a:hover {
    text-decoration: underline;
}

#bs-post .post-body ul {
    padding-left: 1rem;
    margin-bottom: 1rem; /* 16px */
    list-style-type: disc;
    list-style-position: outside;
}

#bs-post .post-body ul ul {
    margin-bottom: 0rem;
    list-style-type: revert;
    padding-inline-start: 1.5rem; /* 24px */
}

#bs-post .post-body ol {
    margin-bottom: 1rem; /* 16px */
    list-style-type: decimal;
    list-style-position: outside;
}

#bs-post .post-body ol ol {
    margin-bottom: 0rem;
    list-style-type: revert;
    padding-inline-start: 1.5rem; /* 24px */
}

#bs-post .post-body .bs-image {
    margin-top: 1rem; /* 16px */
    margin-bottom: 1rem; /* 16px */
    text-align: center;
}
#bs-post .post-body .bs-image .caption {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    /* color: var(--bs-color-content-500); */
    font-weight: 400;
}
#bs-post .post-body .bs-image.bs-align-center img {
    margin-left:auto;
    margin-right:auto;
}
#bs-post .post-body .bs-image.bs-align-right img {
    margin-left:auto;
}



#bs-post .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem; /* 32px */
    margin-bottom: 2rem; /* 32px */
    align-items: center;
}

#bs-post .footer .back-link {
    margin-bottom: 1rem; /* 16px */
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
}

#bs-post .footer .back-link:hover {
    text-decoration: underline;
}

#bs-post .footer .share {
    display: flex;
    column-gap: 1rem; /* 16px */
}

#bs-post .footer .share a {
    border-radius: 0.25rem; /* 4px */    
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
    padding: 0.5rem; /* 8px */
    fill: #fff;
    stroke: none;
}
#bs-post .footer .share a.share-fb {
    background-color: #3b5998;
    border-color: #3b5998;
}
#bs-post .footer .share a.share-twitter {
    background-color: #000;
    border-color: #000;
}
#bs-post .footer .share a.share-linkedin {
    background-color: #0077b5;
    border-color: #0077b5;
}
#bs-post .footer .share a.share-wa {
    background-color: #25D366;
    border-color: #25D366;
}

.bs-powered > a:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}`

