SELECT
  e.id,
  c.nombre AS curso,
  c.temario,
  c.costo,
  e.fechainiciopromocion AS iniciopromocion,
  e.fechafinpromocion AS finpromocion,
  e.fechainicio AS inicio,
  e2.nombre AS estado
FROM
  (
    (
      eventocurso e
      JOIN curso c ON ((e.idcurso = c.id))
    )
    JOIN estadoeventocurso e2 ON ((e.idestadoeventocurso = e2.id))
  );