export default function echo(req, res){
   /* res.statusCode=200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.query.id)*/
    res.json({yourId: req.query.id})
}