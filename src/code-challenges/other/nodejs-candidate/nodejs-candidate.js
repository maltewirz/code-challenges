'use strict';

const express = require('express');
const app = express();
app.use(express.json());


const db = []

app.post('/candidates', function(req, res) {
  const candidate =req.body
  db.push(candidate)
  res.status(200).json({status:"candidate added"})
});

app.get('/candidates/search', function(req, res) {
  const querySkills = req.query.skills.split(',');
  // console.log('querySkills', querySkills)
  let resultCandidate = {}
  let maxSkillOverlap = 0
  for (let i = 0; i < db.length; i++) {
    let currentSkillOverlap= 0
    const currentCandidate = db[i]
    const currentCandidateSkills = db[i].skills
    for (let i = 0; i <= currentCandidateSkills.length; i++) {
      if (querySkills.indexOf(currentCandidateSkills[i]) === 1) {
        // console.log('skills found', currentCandidateSkills[i], querySkills)
        currentSkillOverlap++
        if (currentSkillOverlap >= maxSkillOverlap) {
          maxSkillOverlap = currentSkillOverlap
          resultCandidate = currentCandidate
        }
      }
    }
  }

  console.log('returning candiate', resultCandidate,'db', db,'query',  querySkills)
  if (db.length === 0 || !querySkills) {
    res.status(404).json({status:"error"})
  } else {
    if (!resultCandidate.skills) {
      res.status(404).json({status:"error"})
    }
    res.contentType('application/json');
    res.status(200).json(resultCandidate)
  }
});


app.listen(process.env.HTTP_PORT || 3000);
