<html>

        <style>

            body,p {

                font - family:arial; 

    font-size:16px;

    font-weight:bolder;

    }

    .container {

                width: 350px;

    clear: both;

    }

    .container input {

                width: 100%;

    clear: both;

    }

    </style>

            <div class="container">

                        <body>

                            <b> Gross And Net Pay Of An Employee : </b><br>

                                <br />Name :

                <input type="text" id="name" name="name" required>

                                    <br>

                                        <br /> Hourly Rate of Pay (PR):

                <input type="text" id="Hourly_Pay" name="rate" required>

                                            <br>

                                                <br /> OverTime pay rate (t) :

                <input type="text" id="time" name="time">

                                                    <br>

                                                        <br /> Number of Hours worked in one Week:

                <input type="text" id="hours" name="hours">

                                                            <br>

                                                                <br /> Number of OverTime Hours worked in one Week:

                <input type="text" id="hours1" name="hours">

                                                                    <br>

                                                                        <br /> Payroll Deductions (D):

                <input type="text" id="deduction" name="deduction">

                                                                            <br>

                                                                                <br /> Tax Rate (TR):

                <input type="text" id="rate" name="rate">

                                                                                    <br>

                                                                                        <br>

                                                                                            <button onclick="Gross()">Gross Pay</button>

                                                                                            <button onclick="Net()">Net Pay</button>

                                                                                            <br><br>

                                                                                                <p id="demo"></p> <br><br>

                                                                                                    <p id="demo1"></p>

            </div>

                                                                                                <script>

                                                                                                    function Commas(n) {

            var parts=n.toString().split(".")

            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");

            }

            function Gross() {

            var Hourly_Pay = document.getElementById("Hourly_Pay").value;

            var Worked = document.getElementById("hours").value;

            var Worked1 = document.getElementById("hours1").value;

            var OverTime = document.getElementById("time").value;

            var Payroll_Deduction = document.getElementById("deduction").value;

            var rate = document.getElementById("rate").value;

            HP_Amt = parseFloat(Hourly_Pay) * parseFloat(Worked) ;

            OTP_Amt = parseFloat(OverTime) * parseFloat(Worked1) ;

            Gross_Pay = HP_Amt + OTP_Amt ;

            amt =Gross_Pay.toFixed(2);

            display = Commas(amt);

            results ="Gross Amount to be paid is " + display+".";

            document.getElementById("demo").innerHTML = results;

            }

            function Net() {

            var Hourly_Pay = document.getElementById("Hourly_Pay").value;

            var Worked = document.getElementById("hours").value;

            var Worked1 = document.getElementById("hours1").value;

            var OverTime = document.getElementById("time").value;

            var Payroll_Deduction = document.getElementById("deduction").value;

            var rate = document.getElementById("rate").value;

            HP_Amt = parseFloat(Hourly_Pay) * parseFloat(Worked) ;

            OTP_Amt = parseFloat(OverTime) * parseFloat(Worked1) ;

            Deductions = parseFloat(Payroll_Deduction);

            rate2 = parseFloat(rate)/100;

            Gross_Pay = HP_Amt + OTP_Amt ;

            Net_Pay = (Gross_Pay-(Gross_Pay * rate2) - Payroll_Deduction);

            amt =Net_Pay.toFixed(2);

            display = Commas(amt);

            results ="Net Amount to be paid is " + display+".";

            document.getElementById("demo1").innerHTML = results;

            }

        </script>

    </body>

</html>