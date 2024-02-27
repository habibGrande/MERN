const {Author} = require('../models/Aurthor.model');
module.exports.createAuthor = (require, response) => {
    const {name} = require.body;
    Author.create({
        name
    })
    .then(author => response.json(author))
    .catch(err => response.json(err));
}


module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then( allAuthors => {
            res.json(allAuthors)
        })
        .catch( error => {
            res.json(error)
        });
}
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    const { name } = req.body;
    if (name && name.length < 3) { 
        return res.status(400).json({ errors: { name: "Author name must be at least 3 characters long!" }});
      }
      if (!name) { 
        return res.status(400).json({ errors: {name: "Author name is required!"} });
      }
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}