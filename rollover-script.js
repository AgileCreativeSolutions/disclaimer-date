<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"> </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/momenttimezone/0.5.31/moment-timezone-with-data-2012-2022.min.js"></script>

<script>
const lastdate=moment().endOf('month').format("MM-DD-YYYY");
document.getElementById("disclaimer-date").innerHTML = "Offer expires " + lastdate;
</script>
