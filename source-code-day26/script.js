const idPrefixDel = "student-";
const idPrefixEdit = "student-id-";

$(() => {
  renderStudents();
});

function renderStudents() {
  $.ajax({
    method: "GET",
    url: "https://studentlist2020.herokuapp.com/users",
  }).done(function (data) {
    let content = "";

    for (let i = 0; i < data.length; i++) {
      content += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].year}</td>
            <td>${data[i].email}</td>
            <td>${data[i].phone}</td>
            <td>
                <a href="editStudent.html?id=${data[i].id}" class="edit" id = "${idPrefixEdit}${data[i].id}" ><i class="fas fa-edit"> Chỉnh sửa</i></a> |
                <a href="#" class="delete" id="${idPrefixDel}${data[i].id}"><i class="fas fa-trash-alt"> Xóa</i></a>
            </td>
            </tr>`;
    }

    $("#content").html(content);

    addEventDeleteStudent();
  });
}

function addEventDeleteStudent() {
  let deleteArrayButton = $(".delete");
  for (let i = 0; i < deleteArrayButton.length; i++) {
    $(deleteArrayButton[i]).click(function () {
      $.ajax({
        method: "DELETE",
        url:
          "https://studentlist2020.herokuapp.com/users/" +
          `${deleteArrayButton[i].id.replace(idPrefixDel, "")}`,
      }).done(function (data) {
        renderStudents();
      });
    });
  }
}
