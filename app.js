const child_process = require("child_process")

const username="giitsol6@gmail.com"
const password="Giitsolution123"
async function execazurelogin(username, password){

    const azureCmd = `$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi`;
    const azurecmdd = `az login -u ${username} -p ${password}`;
    child_process.exec(azureCmd, (err, res, stderr) =>{
		if (!err){
			console.log(res);
			console.log("std1:"+stderr);
			child_process.exec(azurecmdd, (err, res, stderr) =>{
				if(!err){
					console.log(res);
					console.log(stderr);
				}
				else{
					console.log(err);
				}
			})
		}
		else{
			console.log(err);
		}
	})
}

async function _execute_easy(cmd){
    const azurecmd = cmd;
    child_process.exec(azurecmd, (err, res) =>{
		if (!err){
			console.log(res);
			console.log("std1:"+stderr);
		}
		else{
			console.log(err);
		}
	})
}

async function create_service_principal(ServicePrincipalName,Role){
    const azurecmd = `az ad sp create-for-rbac --name ${ServicePrincipalName} --role ${Role} --create-cert`;
    child_process.exec(azurecmd, (err, res) =>{
		if (!err){
			console.log(res);
			console.log("std1:"+stderr);
		}
		else{
			console.log(err);
		}
	})
}
execazurelogin(username,password).then((a)=>{
	console.log(a)
})