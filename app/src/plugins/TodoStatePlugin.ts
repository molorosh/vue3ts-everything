import type { App, Plugin } from 'vue';
import TodoStatePluginTemplate from './TodoStatePluginTemplate.vue'

// The Install function used by Vue to register the plugin
export const TodoStatePlugin: Plugin = {
    install(app: App /*, options: ColoredTextOptions*/ ) {

        // makes ColoredText available in your Vue.js app as either "$this.coloredText" (in your Source) or "{{ $coloredText }}" in your templates
        //app.config.globalProperties.$coloredText = createColoredText(options)

        // register Headline as a global component, so you can use it wherever you want in your app
        app.component('status', TodoStatePluginTemplate)
    }
}
