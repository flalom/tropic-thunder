// TODO get entities index from wikipedia data
const entities = {
  html: {},
  css: {},
  ts: {
    synonims: ['TypeScript', 'Microsoft'],
    mentioned: [
      'https://www.typescriptlang.org/',
      'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
      'http://www.typescriptlang.org/play/',
      'https://en.wikipedia.org/wiki/TypeScript'
    ],
    abstract: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    abstract2: 'Any browser. Any host. Any OS. Open source.',
    description: 'TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.\n' +
    'TypeScript is designed for development of large applications and transcompiles to JavaScript.[5] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.\n' +
    'There are multiple options available for transcompilation. Either the default TypeScript Checker can be used,[6] or the Babel compiler can be invoked to convert TypeScript to JavaScript.[7]\n' +
    'TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.[8]\n' +
    'The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0.\n' +
    'TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages.[9] An official extension allows Visual Studio 2012 to support TypeScript as well.[10]\n' +
    'Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.',
    description2: 'History\n' +
    'TypeScript was first made public in October 2012 (at version 0.8), after two years of internal development at Microsoft.[15][16] Soon after the announcement, Miguel de Icaza praised the language itself, but criticized the lack of mature IDE support apart from Microsoft Visual Studio, which was not available on Linux and OS X at that time.[17][18] Today there is support in other IDEs, particularly in Eclipse, via a plug-in contributed by Palantir Technologies.[19][20] Various text editors, including Emacs, Vim, Sublime, Webstorm, Atom[21] and Microsoft\'s own Visual Studio Code also support TypeScript.[22]\n' +
    'TypeScript 0.9, released in 2013, added support for generics.[23] TypeScript 1.0 was released at Microsoft\'s Build developer conference in 2014.[24] Visual Studio 2013 Update 2 provides built-in support for TypeScript.[25]\n' +
    'In July 2014, the development team announced a new TypeScript compiler, claiming 5× performance gains. Simultaneously, the source code, which was initially hosted on CodePlex, was moved to GitHub.[26]\n' +
    'On 22 September 2016, TypeScript 2.0 was released; it introduced several features, including the ability for programmers to optionally prevent variables from being assigned null values,[27] sometimes referred to as the billion-dollar mistake.\n' +
    'Design\n' +
    'TypeScript originated from the shortcomings of JavaScript for the development of large-scale applications both at Microsoft and among their external customers.[28] Challenges with dealing with complex JavaScript code led to demand for custom tooling to ease developing of components in the language.[29]\n' +
    'TypeScript developers sought a solution that would not break compatibility with the standard and its cross-platform support. Knowing that the current ECMAScript standard proposal promised future support for class-based programming, TypeScript was based on that proposal. That led to a JavaScript compiler with a set of syntactical language extensions, a superset based on the proposal, that transforms the extensions into regular JavaScript. In this sense TypeScript was a preview of what to expect of ECMAScript 2015. A unique aspect not in the proposal, but added to TypeScript, is optional static typing[30] that enables static language analysis, which facilitates tooling and IDE support.\n' +
    'ECMAScript 2015 support\n' +
    'Main article: ECMAScript § 6th Edition - ECMAScript 2015\n' +
    'TypeScript adds support for features such as classes, modules, and an arrow function syntax as defined in the ECMAScript 2015 standard.\n' +
    'Features\n' +
    'TypeScript is a language extension that adds features to ECMAScript 6. Additional features include:\n' +
    'Type annotations and compile-time type checking\n' +
    'Type inference\n' +
    'Type erasure\n' +
    'Interfaces\n' +
    'Enumerated types\n' +
    'Generics\n' +
    'Namespaces\n' +
    'Tuples\n' +
    'Async/await\n' +
    'The following features are backported from ECMAScript 2015:\n' +
    'Classes\n' +
    'Modules[31]\n' +
    'Abbreviated "arrow" syntax for anonymous functions\n' +
    'Optional parameters and default parameters\n' +
    'Syntactically, TypeScript is very similar to JScript .NET, another Microsoft implementation of the ECMA-262 language standard that added support for static typing and classical object-oriented language features such as classes, inheritance, interfaces, and namespaces.\n' +
    'Compatibility with JavaScript\n' +
    'TypeScript is a strict superset of ECMAScript 2015, which is itself a superset of ECMAScript 5, commonly referred to as JavaScript.[32] As such, a JavaScript program is also a valid TypeScript program, and a TypeScript program can seamlessly consume JavaScript. By default the compiler targets ECMAScript 5, the current prevailing standard, but is also able to generate constructs used in ECMAScript 3 or 2015.\n' +
    'With TypeScript, it is possible to use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript-generated code from other JavaScript.[33] Type declarations for these libraries are provided with the source code.\n' +
    'Type annotations\n' +
    'TypeScript provides static typing through type annotations to enable type checking at compile time. This is optional and can be ignored to use the regular dynamic typing of JavaScript.\n' +
    'function add(left: number, right: number): number {\n' +
    '\treturn left + right;\n' +
    '}\n' +
    'The annotations for the primitive types are number, boolean and string. Weakly- or dynamically-typed structures are of type any.\n' +
    'Type annotations can be exported to a separate declarations file to make type information available for TypeScript scripts using types already compiled into JavaScript. Annotations can be declared for an existing JavaScript library, as has been done for Node.js and jQuery.\n' +
    'The TypeScript compiler makes use of type inference to infer types when types are not given. For example, the add method in the code above would be inferred as returning a number even if no return type annotation had been provided. This is based on the static types of left and right being numbers, and the compiler\'s knowledge that the result of adding two numbers is always a number. However, explicitly declaring the return type allows the compiler to verify correctness.\n' +
    'If no type can be inferred because of lack of declarations, then it defaults to the dynamic any type. A value of the any type supports the same operations as a value in JavaScript and minimal static type checking is performed for operations on any values.[34]\n' +
    'Declaration files\n' +
    'When a TypeScript script gets compiled there is an option to generate a declaration file (with the extension .d.ts) that functions as an interface to the components in the compiled JavaScript. In the process the compiler strips away all function and method bodies and preserves only the signatures of the types that are exported. The resulting declaration file can then be used to describe the exported virtual TypeScript types of a JavaScript library or module when a third-party developer consumes it from TypeScript.\n' +
    'The concept of declaration files is analogous to the concept of header file found in C/C++.\n' +
    'declare namespace arithmetics {\n' +
    '    add(left: number, right: number): number;\n' +
    '    subtract(left: number, right: number): number;\n' +
    '    multiply(left: number, right: number): number;\n' +
    '    divide(left: number, right: number): number;\n' +
    '}\n' +
    'Type declaration files can be written by hand for existing JavaScript libraries, as has been done for jQuery and Node.js.\n' +
    'Large collections of declaration files for popular JavaScript libraries are hosted on GitHub in DefinitelyTyped.\n' +
    'Classes\n' +
    'TypeScript supports ECMAScript 2015 classes that integrate the optional type annotations support.\n' +
    'class Person {\n' +
    '    private name: string;\n' +
    '    private age: number;\n' +
    '    private salary: number;\n' +
    '    constructor(name: string, age: number, salary: number) {\n' +
    '        this.name = name;\n' +
    '        this.age = age;\n' +
    '        this.salary = salary;\n' +
    '    }\n' +
    '    toString(): string {\n' +
    '        return `${this.name} (${this.age}) (${this.salary})`; // As of version 1.4\n' +
    '    }\n' +
    '}\n' +
    'Generics\n' +
    'TypeScript supports generic programming.[35]\n' +
    'function doSomething<T>(arg: T): T {\n' +
    '    return arg;\n' +
    '}\n' +
    'Modules and namespaces\n' +
    'TypeScript distinguishes between modules and namespaces. Both features in TypeScript support encapsulation of classes, interfaces, functions and variables into containers. Namespaces (formerly internal modules) utilize immediately-invoked function expression of JavaScript to encapsulate code, whereas modules (formerly external modules) leverage JavaScript library patterns to do so (AMD or CommonJS).[36]\n' +
    'Development tools\n' +
    'Compiler\n' +
    'The TypeScript compiler, named tsc, is written in TypeScript. As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.\n' +
    'There is also an alpha version of a client-side compiler in JavaScript, which executes TypeScript code on the fly, upon page load.[37]\n' +
    'The current version of the compiler supports ECMAScript 5 by default. An option is allowed to target ECMAScript 2015 to make use of language features exclusive to that version (e.g. generators). Classes, despite being part of the ECMAScript 2015 standard, are available in both modes.\n' +
    'IDE and editor support\n' +
    'Microsoft provides a plug-in for Visual Studio 2012 and WebMatrix, full integrated support in Visual Studio 2013, Visual Studio 2015, and basic text editor support for Sublime Text, Emacs and Vim.[38]\n' +
    'Visual Studio Code is a (mostly) open-source, cross-platform source code editor developed by Microsoft based on Electron. It supports TypeScript in addition to several other languages, and offers features like debugging and intelligent code completion.\n' +
    'alm.tools is an open source cloud IDE for TypeScript built using TypeScript, ReactJS and TypeStyle.\n' +
    'JetBrains supports TypeScript with code completion, refactoring and debugging in its IDEs built on IntelliJ platform, such as PhpStorm 6, WebStorm 6, and IntelliJ IDEA,[39] as well as their Visual Studio Add-in and extension, ReSharper 8.1.[40]\n' +
    'Atom has a TypeScript Plugin by Basarat with support for code completion, navigation, formatting, and fast compilation.\n' +
    'The online Cloud9 IDE and Codenvy support TypeScript.\n' +
    'A plugin is available for the NetBeans IDE.\n' +
    'A plugin is available for the Eclipse IDE (version Kepler)\n' +
    'TypEcs is available for the Eclipse IDE.\n' +
    'Microsoft provides a TypeScript Plugin for Sublime Text.\n' +
    'The Cross Platform Cloud IDE Codeanywhere supports TypeScript.\n' +
    'Webclipse An Eclipse plugin designed to develop TypeScript and Angular 2.\n' +
    'Angular IDE A standalone IDE available via npm to develop TypeScript and Angular 2 applications, with integrated terminal support.\n' +
    'Tide – TypeScript Interactive Development Environment for Emacs.\n' +
    'Tsuquyomi - a Vim plugin which uses TSServer and provides features like code completion, navigation and syntax and semantic error checking.\n' +
    'Integration with build automation tools\n' +
    'Using plug-ins, TypeScript can be integrated with build automation tools, including Grunt (grunt-ts[41]), Apache Maven (TypeScript Maven Plugin[42]), Gulp (gulp-typescript[43]) and Gradle (TypeScript Gradle Plugin[44]).\n' +
    'Linting tools\n' +
    'TSLint[45] scans TypeScript code for conformance to a set of standards and guidelines. ESLint, a standard JavaScript linter, also provided some support for TypeScript via community plugins. However, ESLint\'s inability to leverage TypeScript\'s language services precluded certain forms of semantic linting and program-wide analysis.[46] In early 2019, the TSLint team announced the linter\'s deprecation in favor of typescript-eslint, a joint effort of the TSLint, ESLint and TypeScript teams to consolidate linting under the ESLint umbrella for improved performance, community unity and developer accessibility.[47]\n' +
    'Release history\n' +
    'Version number\tRelease date\tSignificant changes\n' +
    '0.8\t1 October 2012\t\n' +
    '0.9\t18 June 2013\t\n' +
    '1.1\t6 October 2014\tperformance improvements\n' +
    '1.3\t12 November 2014\tprotected modifier, tuple types\n' +
    '1.4\t20 January 2015\tunion types, let and const declarations, template strings, type guards, type aliases\n' +
    '1.5\t20 July 2015\tES6 modules, namespace keyword, for..of support, decorators\n' +
    '1.6\t16 September 2015\tJSX support, intersection types, local type declarations, abstract classes and methods, user-defined type guard functions\n' +
    '1.7\t30 November 2015\tasync and await support,\n' +
    '1.8\t22 February 2016\tconstraints generics, control flow analysis errors, string literal types, allowJs\n' +
    '2.0\t22 September 2016\tnull- and undefined-aware types, control flow based type analysis, discriminated union types, never type, readonly keyword, type of this for functions\n' +
    '2.1\t8 November 2016\tkeyof and lookup types, mapped types, object spread and rest,\n' +
    '2.2\t22 February 2017\tmix-in classes, object type,\n' +
    '2.3\t27 April 2017\tasync iteration, generic parameter defaults, strict option\n' +
    '2.4\t27 June 2017\tdynamic import expressions, string enums, improved inference for generics, strict contravariance for callback parameters\n' +
    '2.5\t31 August 2017\toptional catch clause variables\n' +
    '2.6\t31 October 2017\tstrict function types\n' +
    '2.7\t31 January 2018\tconstant-named properties, fixed length tuples\n' +
    '2.8\t27 March 2018\tconditional types, improved keyof with intersection types\n' +
    '2.9\t14 May 2018\tsupport for symbols and numeric literals in keyof and mapped object types\n' +
    '3.0\t30 July 2018\tproject references, extracting and spreading parameter lists with tuples\n' +
    '3.1\t27 September 2018\tmappable tuple and array types\n' +
    '3.2\t30 November 2018\tstricter checking for bind, call, and apply\n' +
    '3.3\t31 January 2019\trelaxed rules on methods of union types, incremental builds for composite projects\n' +
    '3.4\t29 March 2019\tfaster incremental builds, type inference from generic functions, readonly modifier for arrays, const assertions, type-checking globalThis\n' +
    '3.5\t29 May 2019\tfaster incremental builds, omit helper type, improved excess property checks in union types, smarter union type checking\n' +
    '3.6\t28 August 2019\tStricter generators, more accurate array spread, better unicode support for identifiers'
  },
  angular2: {},
  angularjs: {},
  vue: {
    abstract: 'The Progressive\n' + 'JavaScript Framework',
    abstract2: 'Code.xyz Logo\n' +
    'Build APIs you need in minutes instead of days, for free.\n' +
    'Approachable\n' +
    'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!\n' +
' \n' +
    'Versatile\n' +
    'An incrementally adoptable ecosystem that scales between a library and a full-featured framework.\n' +
' \n' +
    'Performant\n' +
    '20KB min+gzip Runtime\n' +
    'Blazing Fast Virtual DOM\n' +
    'Minimal Optimization Efforts',
    mentioned: ['https://vuejs.org', 'https://github.com/vuejs/vue', 'https://en.wikipedia.org/wiki/Vue.js'],
    description: 'Vue.js (commonly referred to as Vue; pronounced /vjuː/, like view) is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.[10] It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru[11].',
    description2: 'Overview\n' +
    'Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages[12], with Nuxt.js as one of the most popular solutions.\n' +
'History\n' +
    'Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process: "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight."[13] The first source code commit to the project was dated July 2013, and Vue was first released the following February, in 2014.\n' +
'Versions\n' +
    'Version\tRelease date\tTitle\n' +
    '2.6\t2019 Feb 4\tMacross\n' +
    '2.5\t2017 Oct 13\tLevel E\n' +
    '2.4\t2017 Jul 13\tKill la Kill\n' +
    '2.3\t2017 Apr 27\tJoJo\'s Bizarre Adventure\n' +
    '2.2\t2017 Feb 26\tInitial D\n' +
    '2.1\t2016 Nov 22\tHunter X Hunter\n' +
    '2.0\t2016 Sep 30\tGhost in the Shell\n' +
    '1.0\t2015 Oct 27\tEvangelion\n' +
    '0.12\t2015 Jun 12\tDragon Ball\n' +
    '0.11\t2014 Nov 7\tCowboy Bebop\n' +
    '0.10\t2014 Mar 23\tBlade Runner\n' +
    '0.9\t2014 Feb 25\tAnimatrix\n' +
    '0.8\t2014 Jan 27\t-\n' +
    '0.7\t2013 Dec 24\t-\n' +
    '0.6\t2013 Dec 8\tVueJS\n' +
    'Features\n' +
    'Components\n' +
    'Vue components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue’s compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.[14] The code snippet below contains an example of a Vue component. The component presents a button and prints the number of times the button is clicked:\n' +
'<div id="tuto">\n' +
    '\t<button-clicked v-bind:initial-count="0"></button-clicked>\n' +
    '</div>\n' +
'<script>\n' +
    'Vue.component(\'button-clicked\', {\n' +
    '  props: [ "initialCount" ],\n' +
    '  data: () => ({\n' +
    '    count: 0,\n' +
    '  }),\n' +
    '  template: `<button v-on:click="onClick">Clicked {{ count }} times</button>`,\n' +
    '  computed: {\n' +
    '    countTimesTwo() {\n' +
    '      return this.count * 2;\n' +
    '    }\n' +
    '  },\n' +
    '  watch: {\n' +
    '    count(newValue, oldValue) {\n' +
    '      console.log(`The value of count is changed from ${oldValue} to ${newValue}.`);\n' +
    '    }\n' +
    '  },\n' +
    '  methods: {\n' +
    '    onClick() {\n' +
    '        this.count += 1;\n' +
    '    }\n' +
    '  },\n' +
    '  mounted() {\n' +
    '    this.count = this.initialCount;\n' +
    '  }\n' +
    '});\n' +
'new Vue({\n' +
    '  el: \'#tuto\',\n' +
    '});\n' +
    '</script>\n' +
    'Templates\n' +
    'Vue uses an HTML-based template syntax that allows binding the rendered DOM to the underlying Vue instance\'s data. All Vue templates are valid HTML that can be parsed by specification-compliant browsers and HTML parsers. Vue compiles the templates into virtual DOM render functions. A virtual Document Object Model (or “DOM”) allows Vue to render components in its memory before updating the browser. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.\n' +
'Vue users can use template syntax or choose to directly write render functions using JSX.[15] Render functions allow application to be built from software components.[16]\n' +
'Reactivity\n' +
    'Vue features a reactivity system that uses plain JavaScript objects and optimized re-rendering. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render.[17]\n' +
'Transitions\n' +
    'Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:\n' +
'Automatically apply classes for CSS transitions and animations\n' +
    'Integrate third-party CSS animation libraries, such as Animate.css\n' +
    'Use JavaScript to directly manipulate the DOM during transition hooks\n' +
    'Integrate third-party JavaScript animation libraries, such as Velocity.js\n' +
    'When an element wrapped in a transition component is inserted or removed, this is what happens:\n' +
'Vue will automatically sniff whether the target element has CSS transitions or animations applied. If it does, CSS transition classes will be added/removed at appropriate timings.\n' +
    'If the transition component provided JavaScript hooks, these hooks will be called at appropriate timings.\n' +
    'If no CSS transitions/animations are detected and no JavaScript hooks are provided, the DOM operations for insertion and/or removal will be executed immediately on next frame.[18][19]\n' +
    'Routing\n' +
    'A traditional disadvantage of single-page applications (SPAs) is the inability to share links to the exact "sub" page within a specific web page. Because SPAs serve their users only one URL-based response from the server (it typically serves index.html or index.vue), bookmarking certain screens or sharing links to specific sections is normally difficult if not impossible. To solve this problem, many client-side routers delimit their dynamic URLs with a "hashbang" (#!), e.g. page.com/#!/. However, with HTML5 most modern browsers support routing without hashbangs.\n' +
'Vue provides an interface to change what is displayed on the page based on the current URL path -- regardless of how it was changed (whether by emailed link, refresh, or in-page links). Additionally, using a front-end router allows for the intentional transition of the browser path when certain browser events (i.e. clicks) occur on buttons or links. Vue itself doesn’t come with front-end hashed routing. But the open source "vue-router" package provides an API to update the application\'s URL, supports the back button (navigating history), and email password resets or email verification links with authentication URL parameters. It supports mapping nested routes to nested components and offers fine-grained transition control. With Vue, developers are already composing applications with small building blocks building larger components. With vue-router added to the mix, components must merely be mapped to the routes they belong to, and parent/root routes must indicate where children should render.[20]\n' +
'<div id="app">\n' +
    '  <router-view></router-view>\n' +
    '</div>\n' +
    '...\n' +
'<script>\n' +
    '...\n' +
    'const User = {\n' +
    '  template: <div>User {{ $route.params.id }}</div>' +
    '}\n' +
'const router = new VueRouter({\n' +
    '  routes: [\n' +
    '    { path: \'/user/:id\', component: User }\n' +
    '  ]\n' +
    '})\n' +
    '...\n' +
    '</script>\n' +
    'The code above:\n' +
'Sets a front-end route at websitename.com/user/<id>.\n' +
    'Which will render in the User component defined in (const User...)\n' +
    'Allows the User component to pass in the particular id of the user which was typed into the URL using the $route object\'s params key: $route.params.id.\n' +
    'This template (varying by the params passed into the router) will be rendered into <router-view></router-view> inside the DOM\'s div#app.\n' +
    'The finally generated HTML for someone typing in: websitename.com/user/1 will be:\n' +
    '<div id="app">\n' +
    '  <div>\n' +
    '    <div>User 1</div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '[21]\n' +
'Ecosystem\n' +
    'The core library comes with tools and libraries both developed by the core team and contributors.\n' +
'Official Tooling\n' +
    'Devtools - Browser devtools extension for debugging Vue.js applications\n' +
    'Vue CLI - Standard Tooling for rapid Vue.js development\n' +
    'Vue Loader - a webpack loader that allows the writing of Vue components in a format called Single-File Components (SFCs)\n' +
    'Official Libraries\n' +
    'Vue Router - The official router for Vue.js\n' +
    'Vuex - Flux-inspired Centralized State Management for Vue.js\n' +
    'Vue Server Renderer - Server-Side Rendering for Vue.js\n' +
    'See also\n' +
    '\tFree and open-source software portal\n' +
    'Comparison of JavaScript frameworks\n' +
    'React\n' +
    'AngularJS\n' +
    'Angular\n' +
    'JavaScript framework\n' +
    'JavaScript library\n' +
    'Model–view–ViewModel\n' +
    'Sources\n' +
    'Definition of Free Cultural Works logo notext.svg This article incorporates text from a free content work. Licensed under MIT License License statement: Vue.js Guide, Vue.js, To learn how to add open license text to Wikipedia articles, please see this how-to page. For information on reusing text from Wikipedia, please see the terms of use.\n'
  }
  svelte: {
    abstract: 'Svelte' +
    'Cybernetically enhanced web apps',
    abstract2: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.\n' +
    'Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.\n' +
    ' to learn more.',
    // here the last one is a good example
    mentioned: ['https://svelte.dev', 'https://github.com/sveltejs/svelte', 'https://github.com/sveltejs', 'https://react-etc.net/entry/react-vs-svelte-the-javascript-build-time-framework',
    'https://dev.to/bholmesdev/why-sveltejs-may-be-the-best-framework-for-new-web-devs-205i'],
    description: 'Svelte is a JavaScript framework[1] written by Rich Harris. Svelte applications do not include framework references. Instead, building a Svelte applications generates code to manipulate the DOM, which may give better client run-time performance.',
    description2: 'Any web dev who\'s been at it for a few years has likely heard this question every other day.\n' +
    'I\'m really interested in learning about web development, but I don\'t know how to start. Any suggestions?\n' +
    'A decade ago, this would have been an easy answer. Just make an index.html, throw some tags in there, make that header turn red with CSS, and reach for JQuery (or plane ole JavaScript, depending on who you ask) to handle those mouse clicks!\n' +
    '...Oh, how things have changed. Now we\'re running around with build tools, client side routing, special frameworks with fancy runtime scripts, binding "this" everywhere, template literals, CSS-in-JS... how do we choose what matters most? 🤷‍♀️ We can\'t start teaching how React uses a virtual DOM if someone doesn\'t even know what the DOM is!\n' +
    'This has led to countless avenues to start with with varying degrees of "just type this now, and I\'ll explain later." Some encourage beginners to just learn React or Vue right away to get started with modern practices, while others scream from the mountaintops that beginners should always start with the fundamentals. Truthfully, there are merits to both approaches. The former can get newbies excited with hot reloading and components, running the risk of leaving too much to the unknown, while the latter gets beginners understanding how DOM manipulation works under the hood, while possibly steering people away with the complexities of JS we\'ve since abstracted away.\n' +
    'What we need, then, is a middle ground. A way to get started with the fundamentals while soaking up modern concepts like component-driven development, scoped vs. cascading CSS, templating, declarative functions, etc etc etc.\n' +
    'Enter: Svelte\n' +
    'SvelteJS is a pretty new kid on the block just starting to get some attention. Some may know it as the most popular write-in for the State of JavaScript 2018. For the abridged explanation, Svelte is meant to be the framework that isn\'t really a framework; it\'s basically a tool to compile components down at the build step, allowing you to load a single bundle.js on your page to render your app. This means no virtual DOM, no frameworks on top of frameworks, and no framework to load at runtime.\n' +
    'These are pretty big selling points for more experienced developers, but most beginners probably couldn\'t read that last paragraph without their head exploding. Luckily, it\'s not this compilation sorcery that makes Svelte so beginner-friendly. It\'s actually the syntax.\n' +
    'If you\'ve never seen a Svelte component before, here\'s a really basic example:\n' +
    '<p class="pretty">Here\'s some markup <strong>written by {name}!</strong></p>\n' +
    '<style>\n' +
    '    /* here\'s some scoped CSS */\n' +
    '    .pretty {\n' +
    '        color: red;\n' +
    '    }\n' +
    '</style>\n' +

    '<script>\n' +
    '    /* ...and a variable we can access in the markup */\n' +
    '    let name = "Ben";\n' +
    '</script>\n' +
    'Let\'s unpack this a little. So first off, it\'s worth noting that all of this can live inside a regular .html file, or a .svelte file if your heart desires. Also, we see some familiar tags reminiscent of framework-less development: <style> and <script>. Sadly, writing styles and JS in these tags is necessary for properly building scoped components, but it allows syntax highlighting to work without extra text editor extensions like CSS-in-JS solutions. Plus, Svelte\'s build step is smart enough to scope any component-specific styles by default, so you won\'t have styles bleeding between components.\n' +
    'You\'ll also see some magic happening with that JavaScript variable called name. This is a shiny new concept for Svelte v3, where any variable in your component\'s script is accessible from markup. Thus, there\'s no framework specific syntax to learn for state management, so no Angular $scope, no React this.state, and no Vue data. Instead, we can just use lets everywhere to get assignable state values, cuing re-renders whenever these values change.\n' +
    'This freedom from this jargon means making a component can almost feel like whipping up a CodePen, but without wondering how to connect that declarative JS function you learned to some DOM query selector. Don\'t worry too much though: Svelte won\'t mess with callback functions or window listeners, so those fundamentals remain.\n' +
    'The other nice thing about these components is that they\'re just as import-able as a traditional component. Just import the .html and Svelte knows how to unwrap it 😊\n' +
    '<div>\n' +
    '    <Wizardry />\n' +
    '</div>\n' +
    '<script>\n' +
    '    import Wizardry from \'./wizardry.html\' ' +
    '</script>\n' +
    'Neat, but hang on a minute...\n' +
    'Some readers may find this concept as mind-blowing as I do, but others probably have their pitchforks ready at the thought of throwing this at beginners. Won\'t this confuse them about how DOM manipulation really works?\n' +
    'The answer is... maybe. But when someone\'s just starting out (at least from personal experience), it\'s okay to accept a little abstraction for the sake of making cool things more quickly.\n' +
    'Also, just as languages like Java and JS have abstracted away pointer management with garbage collection, it feels like most every modern web development tool has abstracted away DOM manipulation, save for more advanced edge cases beginners likely won\'t need to face. Btw, if you are scratching your head at what pointer management is, I think that kind of proves my point 😛 Thus, rather than forcing beginners to manipulate the DOM or grasping framework-specific state wrappers, why not just let them access variables directly from markup? Now they can learn the basic principles of component state without getting caught in the weeds.\n' +
    'Okay I see your basic example, but Svelte must have some framework-specific weirdness to make everything work\n' +
    'Admittedly, this is true, but it\'s a lot less than you might think. One Svelte-y syntax is for looping and conditionals for displaying DOM elements. This works a lot like the JSX way of returning elements from a map, but without all the nested brackets beginners (and myself) can easily get lost in. Here\'s a basic one that generates a list of a elements from an array:\n' +
    '<ul>\n' +
    '    {#each profiles as profile}\n' +
    '    <li>{profile.name}: {profile.role}</li>\n' +
    '    {/each}\n' +
    '</ul>\n' +

    '<script>\n' +
    '    const profiles = [\n' +
    '        {name: \'Wes Bos\', role: \'React extraordinaire\'},\n' +
    '        {name: \'Chris Coyier\', role: \'Father of CodePen\'},\n' +
    '        {name: \'Cassidy Williams\', role: \'Letting you know it\'s pi time\'}\n' +
    '    ]\n' +
    '</script>\n' +
    'Again, I understand any criticisms about the syntax, but what I love is how easily understood it is. Instead of nesting JavaScript in our HTML, we just say hey, lemme loop over this array and create an element for each one.\n' +

    'There\'s another Svelte oddity worth mentioning that I\'m admittedly not as thrilled about: passing props to components. Yes, it is fully functional and easy to learn, but the syntax is a bit too magical for some people\'s tastes. To handle props, we simply pass the prop to the component wherever it\'s imported...\n' +
    '<!-- somewhere.html -->\n' +
    '<Profile coolGuy="Scott Tolinski" /> \n' +
    '...and get that variable as an exported "let"\n' +
    '<!-- profile.html -->\n' +
    '<p>{coolGuy}</p>\n' +
    '<script>\n' +
    '    export let coolGuy = \'\';\n' +
    '</script>\n' +
    'I totally understand if some are turned off by abusing "export" like this, but it does at least follow the way beginners should conceptualize modules: we export what we should access outside of the component, and import what we want to show in our component.\n' +
    'I might be able to get past that strange-ness... but how about that build step?\n' +
    'So another criticism about getting beginners started with frameworks is the need to use a package manager. Which means... gasp using the terminal!\n' +
    'Look, I get it, popping that thing open can be intimidating, with its monospace font and that spooky "cd" to jump directories. But to be fair, it\'s really not a huge hurdle when you only need a single command to get running. Additionally, the integrated terminal within VS Code makes it dead simple to get started with; it even plops you down in your current project directory!\n' +
    'Svelte actually offers a downloadable starting point that\'s nice outside of the box, but I made my own starter template that just uses the build tool Rollup for live reloading. In fact, the config file is under 30 lines long! For a basic Svelte project, these is all the directories and files you need:\n' +
    '/public\n' +
    '    index.html\n' +
    '/src\n' +
    '   index.html\n' +
    'app.js\n' +
    'rollup.config.js\n' +
    'package.json\n' +
    'Just add a command to run the build step in the package.json and you\'re all set! You could certainly say that all the extra modules and files other frameworks need aren\'t a problem if beginners don\'t touch them, but in my eyes, the less extra stuff for newbies to wonder about, the better.\n' +
    'Okay fine, it\'s cool and beginner-friendly. But is it a stable framework?\n' +
    'This is a very relevant question for a framework as young as Svelte. All examples I have shown use the syntax of Svelte version 3, which is still in beta as of the time of this writing has a relatively small following compared to framework behemoths like ReactJS and VueJS. So as exciting as it is, I would wait another few months before rushing to teach code workshops with it. Still, Svelte offers a really concise page for documentation for version 3 that can ease beginners into the framework without getting overwhelmed by subpage after subpage of explanation.\n' +
    'So let\'s go over some of the main selling points for learning web development with Svelte:\n' +
    'It\'s a component-based framework with 0 extra plugins\n' +
    'It handles state management without all the usual cruft\n' +
    'It uses scoped styling without needing CSS-in-JS (so no editor extensions or wacky syntax)\n' +
    'It only needs a dead simple build script to get going\n' +
    'Hardly any files are needed in a base project\n' +
    'Of course, it\'s totally fine if I haven\'t convinced you with this post; all good posts stoke a little controversy! But I hope it at least showed you how freaking cool and simple Svelte can be to learn.\n' +
    'Thanks for reading! 😊\n' +
    'I\'m a frontend webdev-in-training always tinkering with something. I\'ll try to post regularly here, so drop a follow if you enjoyed!'
  }
}
