import { dirname } from "path";
import { fileURLToPath } from "url";
import FtpDeploy from "ftp-deploy";
import {config} from "../config.js";


const __dirname = dirname(fileURLToPath(import.meta.url));

const ftpDeploy = new FtpDeploy();

const ftpConfig = {
    user: config.FTP_USER,
    password: config.FTP_PASSWORD,
    host: config.FTP_HOST,
    port: config.FTP_PORT,
    localRoot: `${__dirname}/../dist`,
    remoteRoot: config.FTP_DIR,
    include: ["*", "**/*"],
    deleteRemote: false,
    forcePasv: true,
};

ftpDeploy.deploy(ftpConfig, function (err) {
    if (err) console.log(err);
    else console.log("Deployment finished");
});
