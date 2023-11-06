SELECT
  a.id,
  a.nombre,
  a.apellidop,
  c.nombre AS curso,
  e.fechainicio AS inicio,
  ea.fechainscripcion AS inscripcion,
  ea.costo
FROM
  (
    (
      (
        eventocurso_alumno ea
        JOIN eventocurso e ON ((ea.ideventocurso = e.id))
      )
      JOIN alumno a ON ((a.id = ea.idalumno))
    )
    JOIN curso c ON ((c.id = e.idcurso))
  );