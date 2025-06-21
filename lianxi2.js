function generateExcel () {
    const fileInput = document.getElementById("templateFile");
    if (fileInput.files.length === 0) {
        alert("テンプレートファイルを選択してください");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try{
            const data =new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array'});

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            sheet['A27'] = { t: 's', v:document.getElementById("date").value};
            sheet['F27'] = { t: 's', v:document.getElementById("carNo").value};
            sheet['K27'] = { t: 's', v:document.getElementById("item").value};
            sheet['X27'] = { t: 's', v:Number(document.getElementById("weight").value)};
            sheet['AC27'] = { t: 's', v:Number(document.getElementById("price").value)};
            
            const today = new Date().toISOString().slice(0, 10);
            XLSX.writeFile(workbook, `請求書_${today}.xlsx`);
        } catch (err) {
        alert("エラー発生：" + err.message);
        }
        
    };

    reader.readAsArrayBuffer(fileInput.files[0]);
}