$("document").ready(function() {
  var user_id = window.location.hash.substr(1);
  var profile_api_url = 'https://stage.metadata.libraries.psu.edu/v1/users/' + user_id + '/profile';

  var render_profile = function(profile_data) {
    var context = profile_data.data.attributes;
    context.has_scopus_info = function(){
      return this.total_scopus_citations > 0 || this.scopus_h_index || this.pure_profile_url;
    }
    context.has_bio_info = function(){
      return this.bio || this.teaching_interests || this.research_interests;
    }
    context.has_scopus_citations = function(){
      return this.total_scopus_citations > 0;
    }
    context.has_publications = function(){
      return this.publications.length > 0;
    }
    context.has_grants = function(){
      return this.grants.length > 0;
    }
    context.has_presentations = function(){
      return this.presentations.length > 0;
    }
    context.has_performances = function(){
      return this.performances.length > 0;
    }
    context.has_advising_roles = function(){
      return this.advising_roles.length > 0;
    }
    context.has_news_stories = function(){
      return this.news_stories.length > 0;
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
