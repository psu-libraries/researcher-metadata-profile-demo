$("document").ready(function() {
  var user_id = window.location.hash.substr(1);
  var profile_api_url = 'https://stage.metadata.libraries.psu.edu/v1/users/' + user_id + '/profile';

  var render_profile = function(profile_data) {
    var context = profile_data.data.attributes;
    context.has_scopus_info = function(){
      return this.total_scopus_citations > 0 || this.scopus_h_index || this.pure_profile_url;
    }
    context.has_scopus_citations = function(){
      return this.total_scopus_citations > 0;
    }
    context.has_publications = function(){
      return this.publications.length > 0;
    }

    var source   = document.getElementById("profile-template").innerHTML;
    var template = Handlebars.compile(source);
    var rendered_html = template(context);
    $('#profile').append(rendered_html);
    $('#tabs').tabs();
  }

  $.ajax(profile_api_url, {
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader("Accept","application/json");
    },
    success: render_profile
  });
});
