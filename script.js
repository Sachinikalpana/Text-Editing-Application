function format(command, value=null){
    document.execCommand(command, false, value);
    document.getElementById('editor').focus();
}

document.getElementById('fontColor').addEventListener('input',function(){
    format('foreColor', this.value);
});
