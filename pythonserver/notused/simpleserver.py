#!/usr/bin/env python
"""
Very simple HTTP server in python.
Usage::
    ./dummy-web-server.py [<port>]
Send a GET request::
    curl http://localhost
Send a HEAD request::
    curl -I http://localhost
Send a POST request::
    curl -d "foo=bar&bin=baz" http://localhost
"""
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SocketServer
import json
from urlparse import urlparse, parse_qs
import subprocess

class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        parsed_path = urlparse(self.path)
        method_id = parsed_path.path
        
        #response = json.loads(subprocess.check_output(["python", "script.py"]))
        
        query_components = parse_qs(parsed_path.query)
        callback = query_components["callback"] 
        self.wfile.write("{}({})".format(callback[0],json.dumps(
            
                [
                    { "DT_RowId": "row_1", "supplier": "ikea", "color": "red" },
                    { "DT_RowId": "row_2", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_3", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_4", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_5", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_6", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_7", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_8", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_9", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_10", "supplier": "sconto", "color": "blue" },
                    { "DT_RowId": "row_11", "supplier": "sconto", "color": "blue" }
                ]
            
            #{
            #    "data" : [
            #        { "DT_RowId": "row_1", "supplier": "ikea", "color": "red" },
            #        { "DT_RowId": "row_2", "supplier": "sconto", "color": "blue" }
            #    ],
            #    "files": []
            #}
        )))
        
        #self.wfile.write("{}".format(json.dumps(
        #    {
        #        hash1 : [ 'ikea', 'red'],
        #        hash2 : [ 'sconto', 'blue'],
        #    }
        #)))
        
    def do_POST(self):
        self._set_headers()
        parsed_path = urlparse(self.path)
        method_id = parsed_path.path
        self.wfile.write(json.dumps({'ok': 'method_id'}))
        
    def do_HEAD(self):
        self._set_headers()
        
def run(server_class=HTTPServer, handler_class=S, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print 'Starting httpd...'
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()