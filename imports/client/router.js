import { Router } from 'meteor/akryum:vue-router2';
import Toolbar from '/imports/client/views/templates/toolbar/Toolbar.vue';
import Navigation from '/imports/client/views/templates/navigation/Navigation.vue';
import Index from '/imports/client/views/public/Index.vue';
import Lists from '/imports/client/views/public/components/Lists.vue';

Router.configure(router => {
    router.addRoutes([{
        path: "/",
        name: "Index",
        meta: { fixToolbar: true, pageTitle: "Dashboard" },
        components: {
            default: Index,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, {
        path: "/components/lists",
        name: "Lists",
        meta: { fixToolbar: true, pageTitle: "Lists" },
        components: {
            default: Lists,
            toolbar: Toolbar,
            navigation: Navigation,
        }
    }, ]);
});