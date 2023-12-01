$(document).ready(function () {
  // Add item to cart
  $('#cart-items').on('click', '.remove-item', function () {
    // Remove item logic
    $(this).closest('.cart-item').remove()
  })

  // Submit order
  $('.submit-btn').on('click', function () {
    $('#order-form-container').fadeIn()
  })

  // Show PDF Viewer
  $('#policy-link').on('click', function (e) {
    e.preventDefault()
    // Add PDF viewer logic
  })

  if (orderTotal < 300000) {
    $('#min-order-popup').fadeIn()
  }
})

$(document).ready(function () {
  // PDF Viewer Popup
  $('#policy-link').fancybox({
    type: 'iframe',
    iframe: {
      css: {
        width: '80%',
        height: '80%',
      },
    },
  })

  $('.submit-btn').on('click', function (e) {
    e.preventDefault()

    if (orderTotal < 300000) {
      $('#min-order-popup').fadeIn()
      return
    }

    $.ajax({
      url: 'path/to/your/server-script.php',
      method: 'POST',
      data: {
        name: $('#name').val(),
        phone: $('#phone').val(),
        address: $('#address').val(),
        comments: $('#comments').val(),
        agree: $('#agree').prop('checked'),
      },
      success: function () {
        //
        $('#confirmation-popup').fadeIn()
      },
      error: function () {
        console.error('Error sending order data.')
      },
    })
  })

  $('#close-pdf-popup').on('click', function () {
    $.fancybox.close()
  })
})
