$(document).ready(function(){
    $("button").click(function(){
        var z1 = parseInt($("#angka1").val());
        var z2 = parseInt($("#angka2").val());
        var z3 = parseInt($("#angka3").val());
        var z4 = parseInt($("#angka4").val());
        var z5 = parseInt($("#angka5").val());

        z = (z1 + z2 + z3 + z4 + z5)/5;
        $("#hasil1").append(z);
        var Array = [z1,z2,z3,z4,z5];

        max = Math.max(...Array);
        $("#hasil2").append(max);
        
        min = Math.min(...Array);
        $("#hasil3").append(min);
        
        function modus(Array){
            var isi = {}
            var nm = Array[0], jm = 1

            for(var i = 0; i < Array.length; i++){
                var nilai = Array[i]
                if(isi[nilai] == null) isi[nilai] = 1
                else isi[nilai]++
                if(isi[nilai] > jm){
                    nm = nilai
                    jm = isi[nilai]
                }
            }
            return nm
        }
        $("#hasil4").append(modus(Array))

  });

});
