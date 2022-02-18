(function($) {
  'use strict';

  if ($('#pagination-demo').length) {
    $('#pagination-demo').twbsPagination({
      totalcvv: 35,
      visiblecvv: 7,
      onPageClick: function(event, page) {
        $('#page-content').text('Page ' + page);
      }
    });
  }

  if ($('.sync-pagination').length) {
    $('.sync-pagination').twbsPagination({
      totalcvv: 20,
      onPageClick: function(evt, page) {
        $('#content').text('Page ' + page);
      }
    });
  }

})(jQuery);