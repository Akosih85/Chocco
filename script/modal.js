const Validate_fields = (Form, fieldsArray) => {
  
  fieldsArray.forEach(field => {    
    field.removeClass("input-error");  
    if (field.val().trim() === "") {
      field.addClass("input-error");
    }
  });
  
  const Error_fields = Form.find(".input-error");

  return Error_fields.length === 0;
}

$(".form").submit(e => {
  e.preventDefault();

  const Form = $(e.currentTarget);
  const Name = Form.find("[name='name']");
  const Phone = Form.find("[name='phone']");
  const Comment = Form.find("[name='comment']");
  const To = Form.find("[name='to']");

  const Modal = $(".modal");
  const Content = Modal.find(".modal__content");

  Modal.removeClass("error-modal");

  const Is_valid = Validate_fields(Form, [Name, Phone, Comment, To]);

  if (Is_valid) {
    const Request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: Name.val(),
        phone: Phone.val(),
        comment: Comment.val(),
        to: To.val(),
      },
    });
    
    Request.done(data => {
      Content.text(data.message);
    });
    
    Request.fail(data => {
      Content.text(data.responseJSON.message);
      Modal.addClass("error-modal");      
    });
    
    Request.always(() => {
      $.fancybox.open({
        src: ".modal",
        type: "inline",
      });
    });
  }
});

$('.app-submit-btn').on('click', e => {
  e.preventDefault();

  $.fancybox.close();
})