SELECT
  e.id,
  c.nombre AS curso,
  c.temario,
  c.costo,
  e.fechainiciopromocion AS iniciopromocion,
  e.fechafinpromocion AS finpromocion,
  e.fechainicio AS inicio,
  e2.nombre AS estado,
  e.uuidpage AS uuid,
  (count(ea.ideventocurso)) :: integer AS inscritos
FROM
  (
    (
      (
        eventocurso e
        JOIN curso c ON ((e.idcurso = c.id))
      )
      JOIN estadoeventocurso e2 ON ((e.idestadoeventocurso = e2.id))
    )
    LEFT JOIN eventocurso_alumno ea ON ((ea.ideventocurso = e.id))
  )
GROUP BY
  ea.ideventocurso,
  e.id,
  c.nombre,
  c.temario,
  c.costo,
  e2.nombre;