import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Observable, share, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  BASE_URL = '/tp-cp-ws/v1';

  constructor(private httpClient: HttpClient,) { }

  _wsRequest(request: any): Observable<any> {
    const baseUrl = request.version ? request.version : this.BASE_URL;
    request.url = request.content ? request.url : baseUrl + request.url;
    if (!request.options) {
      request.options = {};
    }
    request.options['responseType'] = request.content ? 'text' : 'json';
    delete request['content'];
    delete request['version'];

    return this.httpClient
      .request(request.method, request.url, request.options)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error) => {
          if (error.status === 503) {
            return throwError(
              () =>
                new Error(
                  'This operation is currently offline for maintenance and upgrades. ' +
                  'Please check back soon!'
                )
            );
          } else {
            return throwError(
              () => error.error ? error.error : 'Something went wrong, please contact TIBCO Support!'
            );
          }
        })
      );
  }

  logout() {
    const options = {
      method: 'POST',
      url: '/logout',
      options: {
        headers: {
          'Content-Type': 'application/json',
        }
      },
    };

    return this._wsRequest(options);
  }

  getUser() {
    const options = {
      method: 'GET',
      url: '/whoami',
      options: {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    };

    return this._wsRequest(options);
  }

  getDataPlanes(subscriptionId: string) {
    const url = '/subscriptions/' + subscriptionId + '/data-plane-details';
    const options = {
      method: 'GET',
      url: url,
      options: {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    };

    return this._wsRequest(options);
  }

  provisionCapability(requestObj: any) {
    const url = '/provision-capability';
    const options = {
      method: 'POST',
      url: url,
      options: {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          subscriptionId: requestObj?.subscriptionId,
          dataPlaneId: requestObj?.dataPlaneId,
          payload: requestObj?.requestObj
        }
      }
    };

    return this._wsRequest(options);
  }
}
