const {Router} = require('express');
const http = require('request');
const router = Router();

router.get('/', async (req, res) => {
    res.render('index',{
        title: 'Python для начинающих',
        isIndex: true        
    });
})

router.post('/api/telegram/', async (req, res) => {
    const token = '1898631611:AAEphCy5d-CHNbIfZZeV7PE38Eikv9Q3EO4';
    const chat = '-448268106';
    try {
        const message = req.body.message;        
        http.post(            
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${encodeURI(message)}`,
            function (error, response, body) {                  
                if ((response && response.statusCode) == 200){
                    return res.status(200).json({ message: 'Заявка отправлена' })
                }
                return res.status(400).json({ message: 'Заявку отправить не получилось' })
            }
        );        
    } catch (error) {
        return res.status(500).json({ message: 'Что-то с сервером' })
    }
})

module.exports = router;