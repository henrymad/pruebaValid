export interface Respuesta {
  headers?: Headers;
  body?: Body;
  statusCode?: string;
  statusCodeValue?: number;
  mensaje?: string;
  status?: string
}

export interface Body {
  id?: number;
  nombre?: string;
  apellido?: string;
  procesado?: boolean;
}

export interface Headers {
}