!(function () {
    "use strict"; 
    const api_host = "http://localhost:38000";
    // const api_host = "https://api.blogstraps.com";
    
    init_blog();

    function init_blog() {
        const bs_blog = document.querySelector("#bs-blog");
        const embed_key = bs_blog.getAttribute("data-key")
        const post_slug = bs_blog.getAttribute("data-post") 
        const category_slug = bs_blog.getAttribute("data-category") 
        
      

        var api_params = ["embed_key="+embed_key]
        if(post_slug && post_slug !== "") { api_params.push("post="+post_slug) }
        if(category_slug && category_slug !== "") { api_params.push("category="+category_slug) }
        
        add_loading(bs_blog)
        fetch(api_host + "/embed?"+api_params.join("&")).
            then(function (response) {
                if(response.status >= 400){
                    var child = document.createElement('section');
                    child.innerHTML = `
                    <div style="display:flex; height: 100vh">
                        <div style="margin: auto">
                            <h1 style="font-size: 3rem;
                                line-height: 1;
                                font-weight: 700;
                                text-align: center;
                                margin-bottom: 1.25rem">
                            404 - Page Not Found
                            </h1>
                            <p style="text-align: center;">The page you are looking for doesn't exist or an another error occur</p>
                        </div>
                    </div>`;
                    bs_blog.appendChild(child)
                    return
                }
                return response.json();
            }).then(function (dataAsJson) {
                if(dataAsJson !== undefined){
                    generate_blog_post(bs_blog, dataAsJson)
                }
            }).catch(function (err) {
                console.log(err)
            });

    }

    function add_loading(bs_blog) {
        var child = document.createElement('section');
        child.innerHTML = `<div style="display:flex">
            <div style="margin:auto;text-align:center">
            <span style="pointer-events: none;display: inline-block;aspect-ratio: 1 / 1;width: 1.5rem;">
                <svg width='24' height='24' stroke='#000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class='spinner_V8m1'><circle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'></circle></g></svg>
            </span>
            <div style="font-size:0.875rem;line-height:1.25rem">Preparing blogs...</div>
            </div>
        </div>`;
        bs_blog.appendChild(child)
    }
    
    function generate_blog_post(bs_blog, post) {
        document.title = post.data.header_title;
        add_meta("", "og:url", document.URL)
        post.data.header_meta.forEach(function(el, index) {
            document.getElementsByTagName("head")[0].innerHTML += el //[0].append(el)
        })

        while (bs_blog.firstChild) {
            bs_blog.removeChild(bs_blog.lastChild);
        }
        var child = document.createElement('section');
        child.innerHTML = replace_all(post.data.body, "__currentUrl__", encodeURI(document.URL));
        
        bs_blog.appendChild(child)

        let menu_search_box = document.getElementById('navbar-menu-item-search')
        if(menu_search_box){
            menu_search_box.onclick = function () {
                document.getElementById('bs-search-box')?.classList.toggle('bs-search-box-hidden')
            }
        }

    }

    function lazy_load_img(bs_blog) {
        bs_blog.querySelectorAll("img").forEach(function(el, index) {
            let data_src = el.getAttribute('data-src');
            if(data_src){
                el.src = data_src;
                el.removeAttribute('data-src');
            }
        })
    }

    function add_meta(name, property, content) {
        const el = document.createElement("meta");
        if(name !== "") { el.name=name }
        if(property !== "") { el.setAttribute("property", property)  }
        el.content=content
        document.getElementsByTagName("head")[0].appendChild(el);
    }

    function add_style(content) {
        const el = document.createElement("style");
        el.innerHTML=content
        document.getElementsByTagName("head")[0].appendChild(el);    
    }

    function add_link(rel, href) {
        const el = document.createElement("link");
        el.href=href
        el.rel=rel
        document.getElementsByTagName("head")[0].appendChild(el);
    }

    function replace_all(target, search, replacement) {
        return target.replace(new RegExp(search, 'g'), replacement);
    }
    
})();
  