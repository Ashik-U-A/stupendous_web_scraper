import Vue from "vue";
import Home from "../components/Home.vue";

let vm = new Vue({
  el: "#root",
  data: function() {
    return {
      stats: {
        status: "UNSENT",
        st_code: undefined,
        links: undefined
      },
      web_data: undefined,
      content: {
        url: undefined,
        modal_visible: false,
        modal_component_props: {
          table: undefined
        },
        links: []
      }
    };
  },
  components: {
    Home
  }
});

vm.$on("get-webpage-data", url => {
  if (url !== "") {
    set_content("url", "http://localhost:8080/fetch_static_content/" + url);
    let req = new XMLHttpRequest();
    let options = {
      url: "http://localhost:8080/fetch_static_content/" + url,
      port: url.split("/")[0]
    };
    req.onreadystatechange = function() {
      set_stats("st_code", req.status);
      if (req.readyState == 0) set_stats("status", "UNSENT");
      else if (req.readyState == 1) set_stats("status", "OPENED");
      else if (req.readyState == 2) set_stats("status", "HEADERS_RECEIVED");
      else if (req.readyState == 3) set_stats("status", "LOADING");
      else if (req.readyState == 4) {
        set_stats("status", "DONE");
        set_stats("st_code", req.status);
        if (req.status == 200) {
          console.log(change_content(req.responseText));
          vm.$set(vm.$data, "web_data", change_content(req.responseText));
          parse_content();
        }
      }
    };
    req.open("GET", "http://localhost:8080/fetch_static_content/" + url);
    req.send();
  }
});

vm.$on("open_modal", args => {
  console.log(args.b);
  vm.$set(vm.$data.content, "modal_component_props", args.b);
  vm.$set(vm.$data.content, "modal_component_being_viewed", args.a);
  vm.$set(vm.$data.content, "modal_visible", true);
});
vm.$on("close_modal", () => {
  vm.$set(vm.$data.content, "modal_visible", false);
});

function set_stats(key, value) {
  vm.$set(vm.$data.stats, key, value);
}

function set_content(key, value) {
  vm.$set(vm.$data.content, key, value);
}

function parse_content() {
  get_tables();
}

function get_tables() {
  let tables = document.getElementById("renderer").querySelectorAll("table");
  set_stats("tables", tables.length);
  set_content("tables", tables);
}

function change_content(content) {
  let data = content.match(/(link)(.*)(href=)(\".*\")/g);
  set_content("tables", data);
  set_stats("links", data.length);
  content = content.replace(
    /http:\/\//g,
    "http://localhost:8080/fetch_static_content/http://"
  );
  content = content.replace(
    /https:\/\//g,
    "http://localhost:8080/fetch_static_content/https://"
  );
  return content;
}
