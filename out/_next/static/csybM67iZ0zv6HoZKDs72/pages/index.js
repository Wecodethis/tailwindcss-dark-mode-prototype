(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+IV6":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},"5WRv":function(e,t,n){var a=n("iNmH"),o=n("Qatm"),r=n("Zhxd"),l=n("kluZ");e.exports=function(e){return a(e)||o(e)||r(e)||l()}},"9fEB":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a=s(n("mXGw")),o=s(n("GlZI")),r=n("9rrO"),l=n("bxxT"),i=n("vI6Y");function s(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function c(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?r=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var i=0,s=h.length;i<s;i++){var u=h[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var p=o.props[u],c=a[u]||new Set;c.has(p)?r=!1:(c.add(p),a[u]=c)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function m(e){var t=e.children;return(a.default.createElement(r.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:c,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}m.rewind=d.rewind;var f=m;t.default=f},"9rrO":function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("mXGw"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var a=n("SDJZ"),o=n("T1e2"),r=n("NToG"),l=n("eef+"),i=n("K4DB"),s=n("+IV6"),u=n("5WRv");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var h=n("mXGw"),c=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){l(u,i);var s=p(u);function u(e){var r;return a(this,u),r=s.call(this,e),c&&(t.add(o(r)),n(o(r))),r}return r(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),r(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(h.Component))}},K4DB:function(e,t,n){var a=n("e+GP"),o=n("T1e2");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},NToG:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"config",(function(){return x}));var a=n("mXGw"),o=n.n(a),r=n("9fEB"),l=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),m=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"===typeof e?e(t):h(h({},t),e)),n},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return(o.a.createElement(o.a.Fragment,{},t))}},g=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,p=s["".concat(l,".").concat(u)]||s[u]||y[u]||r;return n?o.a.createElement(p,h(h({ref:t},i),{},{components:n})):o.a.createElement(p,h({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"===typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement";o.a.createElement;var w={},v="wrapper";function N(e){var t=e.components,n=s(e,["components"]);return b(v,i({},w,n,{components:t,mdxType:"MDXLayout"}),b("p",{className:"lead"},"Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS."),b("p",null,"By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ",b("em",{parentName:"p"},"really are")," just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."),b("p",null,"We get lots of complaints about it actually, with people regularly asking us things like:"),b("blockquote",null,b("p",{parentName:"blockquote"},"Why is Tailwind removing the default styles on my ",b("inlineCode",{parentName:"p"},"h1")," elements? How do I disable this? What do you mean I lose all the other base styles too?")),b("p",null,"We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a ",b("inlineCode",{parentName:"p"},"p")," element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look ",b("em",{parentName:"p"},"awesome"),", not awful."),b("p",null,"The ",b("inlineCode",{parentName:"p"},"@tailwindcss/typography")," plugin is our attempt to give you what you ",b("em",{parentName:"p"},"actually")," want, without any of the downsides of doing something stupid like disabling our base styles."),b("p",null,"It adds a new ",b("inlineCode",{parentName:"p"},"prose")," class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"),b("pre",null,b("code",i({parentName:"pre"},{className:"language-html"}),'<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  </p>\n  \x3c!-- ... --\x3e\n</article>\n')),b("p",null,"For more information about how to use the plugin and the features it includes, ",b("a",i({parentName:"p"},{href:"https://github.com/tailwindcss/typography/blob/master/README.md"}),"read the documentation"),"."),b("hr",null),b("h2",null,"What to expect from here on out"),b("p",null,"What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ",b("strong",{parentName:"p"},"bold text"),", unordered lists, ordered lists, code blocks, block quotes, ",b("em",{parentName:"p"},"and even italics"),"."),b("p",null,"It's important to cover all of these use cases for a few reasons:"),b("ol",null,b("li",{parentName:"ol"},"We want everything to look good out of the box."),b("li",{parentName:"ol"},"Really just the first reason, that's the whole point of the plugin."),b("li",{parentName:"ol"},"Here's a third pretend reason though a list with three items looks more realistic than a list with two items.")),b("p",null,"Now we're going to try out another header style."),b("h3",null,"Typography should be easy"),b("p",null,"So that's a header for you \u2014 with any luck if we've done our job correctly that will look pretty reasonable."),b("p",null,"Something a wise person once told me about typography is:"),b("blockquote",null,b("p",{parentName:"blockquote"},"Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.")),b("p",null,"It's probably important that images look okay here by default as well:"),b("figure",null,b("img",{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),b("figcaption",null,"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.")),b("p",null,"Now I'm going to show you an example of an unordered list to make sure that looks good, too:"),b("ul",null,b("li",{parentName:"ul"},"So here is the first item in this list."),b("li",{parentName:"ul"},"In this example we're keeping the items short."),b("li",{parentName:"ul"},"Later, we'll use longer, more complex list items.")),b("p",null,"And that's the end of this section."),b("h2",null,"What if we stack headings?"),b("h3",null,"We should make sure that looks good, too."),b("p",null,"Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."),b("h3",null,"When a heading comes after a paragraph \u2026"),b("p",null,"When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like."),b("ul",null,b("li",{parentName:"ul"},b("p",{parentName:"li"},b("strong",{parentName:"p"},"I often do this thing where list items have headings.")),b("p",{parentName:"li"},"For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right."),b("p",{parentName:"li"},"I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.")),b("li",{parentName:"ul"},b("p",{parentName:"li"},b("strong",{parentName:"p"},"Since this is a list, I need at least two items.")),b("p",{parentName:"li"},"I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.")),b("li",{parentName:"ul"},b("p",{parentName:"li"},b("strong",{parentName:"p"},"It's not a bad idea to add a third item either.")),b("p",{parentName:"li"},"I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."))),b("p",null,"After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."),b("h2",null,"Code should look okay by default."),b("p",null,"I think most people are going to use ",b("a",i({parentName:"p"},{href:"https://highlightjs.org/"}),"highlight.js")," or ",b("a",i({parentName:"p"},{href:"https://prismjs.com/"}),"Prism")," or something if they want to style their code blocks but it wouldn't hurt to make them look ",b("em",{parentName:"p"},"okay")," out of the box, even with no syntax highlighting."),b("p",null,"Here's what a default ",b("inlineCode",{parentName:"p"},"tailwind.config.js")," file looks like at the time of writing:"),b("pre",null,b("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  purge: [],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n}\n")),b("p",null,"Hopefully that looks good enough to you."),b("h3",null,"What about nested lists?"),b("p",null,"Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."),b("ol",null,b("li",{parentName:"ol"},b("strong",{parentName:"li"},"Nested lists are rarely a good idea."),b("ul",{parentName:"li"},b("li",{parentName:"ul"},'You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.'),b("li",{parentName:"ul"},"Nested navigation in UIs is a bad idea too, keep things as flat as possible."),b("li",{parentName:"ul"},"Nesting tons of folders in your source code is also not helpful."))),b("li",{parentName:"ol"},b("strong",{parentName:"li"},"Since we need to have more items, here's another one."),b("ul",{parentName:"li"},b("li",{parentName:"ul"},"I'm not sure if we'll bother styling more than two levels deep."),b("li",{parentName:"ul"},"Two is already too much, three is guaranteed to be a bad idea."),b("li",{parentName:"ul"},"If you nest four levels deep you belong in prison."))),b("li",{parentName:"ol"},b("strong",{parentName:"li"},"Two items isn't really a list, three is good though."),b("ul",{parentName:"li"},b("li",{parentName:"ul"},"Again please don't nest lists if you want people to actually read your content."),b("li",{parentName:"ul"},"Nobody wants to look at this."),b("li",{parentName:"ul"},"I'm upset that we even have to bother styling this.")))),b("p",null,"The most annoying thing about lists in Markdown is that ",b("inlineCode",{parentName:"p"},"<li>")," elements aren't given a child ",b("inlineCode",{parentName:"p"},"<p>")," tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."),b("ul",null,b("li",{parentName:"ul"},b("p",{parentName:"li"},b("strong",{parentName:"p"},"For example, here's another nested list.")),b("p",{parentName:"li"},"But this time with a second paragraph."),b("ul",{parentName:"li"},b("li",{parentName:"ul"},"These list items won't have ",b("inlineCode",{parentName:"li"},"<p>")," tags"),b("li",{parentName:"ul"},"Because they are only one line each"))),b("li",{parentName:"ul"},b("p",{parentName:"li"},b("strong",{parentName:"p"},"But in this second top-level list item, they will.")),b("p",{parentName:"li"},"This is especially annoying because of the spacing on this paragraph."),b("ul",{parentName:"li"},b("li",{parentName:"ul"},b("p",{parentName:"li"},"As you can see here, because I've added a second line, this list item now has a ",b("inlineCode",{parentName:"p"},"<p>")," tag."),b("p",{parentName:"li"},"This is the second line I'm talking about by the way.")),b("li",{parentName:"ul"},b("p",{parentName:"li"},"Finally here's another list item so it's more like a list.")))),b("li",{parentName:"ul"},b("p",{parentName:"li"},"A closing list item, but with no nested list, because why not?"))),b("p",null,"And finally a sentence to close off this section."),b("h2",null,"There are other elements we need to style"),b("p",null,"I almost forgot to mention links, like ",b("a",i({parentName:"p"},{href:"https://tailwindcss.com"}),"this link to the Tailwind CSS website"),". We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier."),b("p",null,"We even included table styles, check it out:"),b("table",null,b("thead",{parentName:"table"},b("tr",{parentName:"thead"},b("th",i({parentName:"tr"},{align:null}),"Wrestler"),b("th",i({parentName:"tr"},{align:null}),"Origin"),b("th",i({parentName:"tr"},{align:null}),"Finisher"))),b("tbody",{parentName:"table"},b("tr",{parentName:"tbody"},b("td",i({parentName:"tr"},{align:null}),'Bret "The Hitman" Hart'),b("td",i({parentName:"tr"},{align:null}),"Calgary, AB"),b("td",i({parentName:"tr"},{align:null}),"Sharpshooter")),b("tr",{parentName:"tbody"},b("td",i({parentName:"tr"},{align:null}),"Stone Cold Steve Austin"),b("td",i({parentName:"tr"},{align:null}),"Austin, TX"),b("td",i({parentName:"tr"},{align:null}),"Stone Cold Stunner")),b("tr",{parentName:"tbody"},b("td",i({parentName:"tr"},{align:null}),"Randy Savage"),b("td",i({parentName:"tr"},{align:null}),"Sarasota, FL"),b("td",i({parentName:"tr"},{align:null}),"Elbow Drop")),b("tr",{parentName:"tbody"},b("td",i({parentName:"tr"},{align:null}),"Vader"),b("td",i({parentName:"tr"},{align:null}),"Boulder, CO"),b("td",i({parentName:"tr"},{align:null}),"Vader Bomb")),b("tr",{parentName:"tbody"},b("td",i({parentName:"tr"},{align:null}),"Razor Ramon"),b("td",i({parentName:"tr"},{align:null}),"Chuluota, FL"),b("td",i({parentName:"tr"},{align:null}),"Razor's Edge")))),b("p",null,"We also need to make sure inline code looks good, like if I wanted to talk about ",b("inlineCode",{parentName:"p"},"<span>")," elements or tell you the good news about ",b("inlineCode",{parentName:"p"},"@tailwindcss/typography"),"."),b("h3",null,"Sometimes I even use ",b("inlineCode",{parentName:"h3"},"code")," in headings"),b("p",null,"Even though it's probably a bad idea, and historically I've had a hard time making it look good. This ",b("em",{parentName:"p"},'"wrap the code blocks in backticks"')," trick works pretty well though really."),b("p",null,"Another thing I've done in the past is put a ",b("inlineCode",{parentName:"p"},"code")," tag inside of a link, like if I wanted to tell you about the ",b("a",i({parentName:"p"},{href:"https://github.com/tailwindcss/docs"}),b("inlineCode",{parentName:"a"},"tailwindcss/docs"))," repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it."),b("h4",null,"We haven't used an ",b("inlineCode",{parentName:"h4"},"h4")," yet"),b("p",null,"But now we have. Please don't use ",b("inlineCode",{parentName:"p"},"h5")," or ",b("inlineCode",{parentName:"p"},"h6")," in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a ",b("inlineCode",{parentName:"p"},"before")," pseudo-element to scream at you if you use an ",b("inlineCode",{parentName:"p"},"h5")," or ",b("inlineCode",{parentName:"p"},"h6"),"."),b("p",null,"We don't style them at all out of the box because ",b("inlineCode",{parentName:"p"},"h4")," elements are already so small that they are the same size as the body copy. What are we supposed to do with an ",b("inlineCode",{parentName:"p"},"h5"),", make it ",b("em",{parentName:"p"},"smaller")," than the body copy? No thanks."),b("h3",null,"We still need to think about stacked headings though."),b("h4",null,"Let's make sure we don't screw that up with ",b("inlineCode",{parentName:"h4"},"h4")," elements, either."),b("p",null,"Phew, with any luck we have styled the headings above this text and they look pretty good."),b("p",null,"Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document."),b("p",null,"What I've written here is probably long enough, but adding this final sentence can't hurt."))}N.isMDXComponent=!0;var k=o.a.createElement,x=(t.default=function(){return k("div",{className:"antialiased text-gray-900"},k(l.a,null,k("title",null,"Tailwind CSS Typography")),k("div",{className:"px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"},k("article",null,k("h1",{className:"sr-only"},"Tailwind CSS Typography"),k("div",{className:"space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24"},k("div",{className:"space-y-10 sm:space-y-0 sm:flex sm:items-center sm:justify-between"},k("svg",{className:"h-6 sm:h-8",fill:"none",viewBox:"0 0 297 24"},k("path",{fill:"#16BDCA",fillRule:"evenodd",d:"M19.418.523c-5.178 0-8.415 2.589-9.71 7.767 1.943-2.59 4.208-3.56 6.797-2.913 1.477.37 2.533 1.44 3.702 2.627 1.903 1.933 4.107 4.17 8.92 4.17 5.178 0 8.414-2.59 9.708-7.768-1.941 2.59-4.207 3.56-6.796 2.913-1.477-.37-2.533-1.441-3.702-2.628C26.434 2.76 24.23.523 19.417.523zm-9.71 11.65c-5.177 0-8.413 2.59-9.708 7.767 1.942-2.589 4.207-3.56 6.796-2.913 1.477.37 2.533 1.441 3.702 2.628 1.904 1.932 4.107 4.169 8.92 4.169 5.178 0 8.414-2.59 9.709-7.767-1.942 2.589-4.208 3.56-6.797 2.912-1.477-.369-2.533-1.44-3.701-2.627-1.904-1.932-4.108-4.169-8.92-4.169z",clipRule:"evenodd"}),k("path",{fill:"#1a202c",d:"M59.31 8.962v-2.79h-3.328V2.414l-2.898.858v2.898h-2.468v2.79h2.468v6.44c0 3.489 1.771 4.723 6.225 4.186v-2.602c-2.2.107-3.327.134-3.327-1.584v-6.44h3.327zM72.013 6.171v1.905c-1.02-1.395-2.603-2.254-4.696-2.254-3.649 0-6.68 3.06-6.68 7.057 0 3.971 3.031 7.057 6.68 7.057 2.093 0 3.676-.859 4.696-2.28v1.931h2.897V6.171h-2.897zm-4.24 11.001c-2.415 0-4.24-1.797-4.24-4.293 0-2.495 1.825-4.293 4.24-4.293s4.24 1.798 4.24 4.293c0 2.496-1.825 4.293-4.24 4.293zM79.737 4.159c1.02 0 1.852-.859 1.852-1.851 0-1.02-.832-1.852-1.852-1.852s-1.851.832-1.851 1.852c0 .992.832 1.85 1.851 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM84.55 19.587h2.898V0h-2.897v19.587zM106.268 6.171l-2.629 9.257-2.791-9.257h-2.763l-2.818 9.257-2.602-9.257h-3.06l4.213 13.416h2.844l2.818-9.042 2.79 9.042h2.844l4.213-13.416h-3.059zM112.91 4.159c1.019 0 1.851-.859 1.851-1.851 0-1.02-.832-1.852-1.851-1.852-1.02 0-1.852.832-1.852 1.852 0 .992.832 1.85 1.852 1.85zm-1.449 15.428h2.898V6.171h-2.898v13.416zM124.78 5.822c-1.824 0-3.273.671-4.159 2.067V6.17h-2.898v13.416h2.898v-7.19c0-2.738 1.503-3.865 3.408-3.865 1.824 0 3.005 1.074 3.005 3.113v7.942h2.898V11.35c0-3.488-2.147-5.528-5.152-5.528zM143.677.805v7.271c-1.019-1.395-2.602-2.254-4.695-2.254-3.649 0-6.681 3.06-6.681 7.057 0 3.971 3.032 7.057 6.681 7.057 2.093 0 3.676-.859 4.695-2.28v1.931h2.898V.805h-2.898zm-4.239 16.367c-2.415 0-4.239-1.797-4.239-4.293 0-2.495 1.824-4.293 4.239-4.293s4.239 1.798 4.239 4.293c0 2.496-1.824 4.293-4.239 4.293z"}),k("path",{fill:"#16BDCA",d:"M161.544 5.748h-10.182v2.61h3.717v11.23h2.728V8.357h3.737v-2.61zM175.997 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19l4.745-8.442zM184.461 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.166 0 2.016.889 2.016 2.095 0 1.186-.85 2.095-2.016 2.095zM199.387 19.864c3.994 0 7.196-3.163 7.196-7.197 0-4.053-3.202-7.196-7.196-7.196-3.994 0-7.177 3.143-7.177 7.196 0 4.034 3.183 7.197 7.177 7.197zm0-2.67c-2.511 0-4.468-1.877-4.468-4.527 0-2.669 1.957-4.547 4.468-4.547s4.468 1.878 4.468 4.547c0 2.65-1.957 4.528-4.468 4.528zM224.061 12.153h-6.94v2.412h4.191c-.474 1.582-1.858 2.63-4.033 2.63-2.886 0-4.725-1.938-4.725-4.508 0-2.63 1.898-4.567 4.527-4.567 1.681 0 3.085.81 3.717 1.918l2.333-1.345c-1.166-1.897-3.4-3.222-6.03-3.222-4.132 0-7.256 3.203-7.256 7.216 0 3.954 3.085 7.177 7.414 7.177 3.974 0 6.802-2.65 6.802-6.643v-1.068zM235.57 19.587h2.946l-3.064-5.22c1.581-.73 2.669-2.293 2.669-4.033 0-2.53-2.057-4.586-4.607-4.586h-5.536v13.84h2.729v-4.805h2.076l2.787 4.804zm-4.863-11.289h2.807c1.028 0 1.878.89 1.878 2.037 0 1.146-.85 2.056-1.878 2.056h-2.807V8.298zM250.996 19.587h2.966l-4.864-13.84h-3.38l-4.844 13.84h2.946l.83-2.491h5.516l.83 2.491zm-5.476-5.041l1.898-5.655 1.898 5.655h-3.796zM262.443 5.748h-5.16v13.84h2.728V15.04h2.432c2.669 0 4.725-2.056 4.725-4.646s-2.056-4.646-4.725-4.646zm0 6.741h-2.432V8.3h2.432c1.167 0 2.017.889 2.017 2.095 0 1.186-.85 2.095-2.017 2.095zM278.79 5.748v5.496h-5.14V5.748h-2.728v13.84h2.728v-5.734h5.14v5.733h2.709V5.747h-2.709zM297 5.748h-3.084l-3.005 5.773-3.006-5.773h-3.084l4.725 8.442v5.397h2.709V14.19L297 5.748z"})),k("div",null,k("a",{href:"https://github.com/tailwindcss/typography",className:"inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-800 text-gray-300 text-sm leading-5 font-medium shadow-lg hover:bg-gray-700 transition ease-in-out duration-100"},k("svg",{className:"h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20"},k("path",{fillRule:"evenodd",d:"M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",clipRule:"evenodd"})),k("span",null,"View on GitHub")))),k("div",{className:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"},k(N,null))))))},{unstable_runtimeJS:!1})},SDJZ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},T1e2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TqC3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},WI9V:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},Zhxd:function(e,t,n){var a=n("+Sw5");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},bxxT:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((a=n("mXGw"))&&a.__esModule?a:{default:a}).default.createContext(null);t.HeadManagerContext=o},"e+GP":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"eef+":function(e,t,n){var a=n("WI9V");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},iNmH:function(e,t,n){var a=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return a(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("mXGw"))&&a.__esModule?a:{default:a},r=n("9rrO");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery;return n||o&&(void 0!==r&&r)}},x9yg:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports}},[["TqC3",0,1]]]);