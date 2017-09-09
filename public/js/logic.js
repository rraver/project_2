$(document).ready(function() {
  
  // Adding event listeners to the page to create a new issue, new project, or view analytics
  $(document).on("click", "#issue", gotoIssues);
 // $(document).on("click", "#projects", gotoProjects);
 // $(document).on("click", "#analytics", gotoAnalytics);

  function gotoIssues() {
     $.ajax({
      method: "GET",
      url: "/createIssue"
    })
    .done();
  }
});
