<script>
    document.addEventListener('DOMContentLoaded', function() {
        var navbarToggler = document.getElementById('custom-toggler');
        var searchCollapse = document.getElementById('searchCollapse');

        navbarToggler.addEventListener('click', function() {
            if (searchCollapse.classList.contains('show')) {
                searchCollapse.classList.remove('show');
            }
        });
    });
</script>
