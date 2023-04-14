import { type App, type Plugin, h, Text } from 'vue';

const pluginComponent = () => {
    return h(
        "figure", { class: 'beinspired',  style: { color: 'black', padding: '1rem' } },
        [
            h(
                "blockquote", { cite: 'https://en.wikipedia.org/wiki/Confucius', style: { backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '0.75rem' } },
                [
                    h("p", "Change is inevitable, ... and very useful on the bus!")
                ]
            ),
            h(
                "figcaption", { style: { textAlign: 'right', padding: '0rem 0.75rem' } },
                [
                    h("span", { style: { fontWeight: 'bold', padding: '0rem 0.3rem' } },  "-"),
                    h(Text, "Confucius, "),
                    h("site", { style: { fontStyle: 'italic' } }, "@MasterKǒng")
                ]
            )
        ]
    );
};

/* this is the HTML we are aiming for, note the use of Text to create a bare text node 
<figure class="beinspired">
    <blockquote cite="https://en.wikipedia.org/wiki/Confucius">
        <p>Change is inevitable, ... and very useful on the bus!</p>
    </blockquote>
    <figcaption>Confucius, <cite>@MasterKǒng</cite></figcaption>
</figure>
*/

// The Install function used by Vue to register the plugin
export const BeInspiredPlugin: Plugin = {
    install(app: App) {

        // makes plugin available in your Vue.js app as either "$this.plugin" (in your Source) or "{{ $plugin }}" in your templates
        //app.config.globalProperties.$plugin = createPlugin(options)

        // register BeInspiredPlugin as a global component, so you can use it wherever you want in your app
        // Usage: <beinspired></beinspired>
        app.component('beinspired', pluginComponent)
    }
}
