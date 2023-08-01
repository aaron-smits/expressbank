"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.post('/token', (req, res) => {
    res.send('Token');
});
app.get('/accounts', (req, res) => {
    res.send('Accounts');
});
app.post('/accounts', (req, res) => {
    res.send('Accounts');
});
app.get('/accounts/:id', (req, res) => {
    res.send(`Accounts ${req.params.id}`);
});
app.put('/accounts/:id', (req, res) => {
    res.send(`Accounts ${req.params.id}`);
});
app.post('/transfer', (req, res) => {
    res.send('Transfer');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map