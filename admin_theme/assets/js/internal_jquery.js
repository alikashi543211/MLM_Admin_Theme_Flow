
    $(function() {
        $( ".datepicker" ).datepicker({
            dateFormat: 'dd-mm-yy' ,
        });
    });
    $(function() {
        $('.clockpicker').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            default: 'now',
            donetext: "Select",
        });
    });
    $(document).ready(function () {
        $('.bmd-form-group').each(function(){
            $(this).find('label').removeClass('bmd-label-floating');
            $(this).removeClass('bmd-form-group');
        });
        // Validator Initialized
        $(".validate-form").validate({
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
                $(element).closest('.form-check').removeClass('has-success').addClass('has-danger');
            },
            success: function(element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).closest('.form-check').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement: function(error, element) {
                $(element).closest('.form-group').append(error);
            },
        });

        // Datatable Initalized
        $('.datatables').DataTable({
            "sort": false,
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('.datatable').DataTable();

        // Select2 Initialized
        $('.select2').select2({
            width: '100%'
        });
    });

    // General Delete Function
    function deleteAlert(url) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                location.href = url;
            }
        });
    }


    // General alert
    function alertMessage(url, msg) {
        Swal.fire({
            title: 'Are you sure?',
            text: msg,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.value) {
                location.href = url;
            }
        });
    }

    // Mapping old values
    function mapDataToFields(data)
    {
        $.map(data, function(value, index){
            var input = $('[name="'+index+'"]');
            if($(input).length && $(input).attr('type') !== 'file')
            {
              if(($(input).attr('type') == 'radio' || $(input).attr('type') == 'checkbox') && value == $(input).val())
                $(input).prop('checked', true);
              else
                  $(input).val(value).change();
            }
        });
    }
    var data = [];
    mapDataToFields(data);